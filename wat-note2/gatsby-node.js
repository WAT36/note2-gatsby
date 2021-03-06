const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "//blog//"}}
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }


  // Define a template for note
  const noteTemplate = path.resolve(`./src/templates/note.js`)

  // Get all markdown note
  const result_note = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "//notes//"}}
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  const notes = result_note.data.allMarkdownRemark.nodes

  // Create note pages
  if (notes.length > 0) {
    notes.forEach((note) => {
      createPage({
        path: note.fields.slug,
        component: noteTemplate,
        context: {
          id: note.id,
        },
      })
    })
  }


  // Define a template for notedir
  const noteDirTemplate = path.resolve(`./src/templates/note-dir.js`)

  // Get all note directory
  const result_notedir = await graphql(
    `
      {
        allDirectory(filter: {absolutePath: {regex: "//notes/"}}) {
          nodes {
            absolutePath
            relativePath
          }
        }
      }
    `
  )

  const notedirs = result_notedir.data.allDirectory.nodes

  // Create note pages
  if (notedirs.length > 0) {
    notedirs.forEach((notedir) => {
      createPage({
        path: "/notes/" + notedir.relativePath,
        component: noteDirTemplate,
        context: {
          absolutePath: notedir.absolutePath,
          markdownRegexPath: "/"+notedir.absolutePath+"/[^/]*.md/"
        },
      })
    })
  }
    
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
