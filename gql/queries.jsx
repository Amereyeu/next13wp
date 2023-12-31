import { gql } from "@apollo/client";

// show all posts on the post page
const GET_ALL_POSTS = gql`
  query getAllPosts($after: String) {
    posts(first: 9, after: $after) {
      nodes {
        language {
          code
          locale
          slug
          name
          id
        }
        id
        slug
        title
        featuredImage {
          node {
            id
            sourceUrl
            altText
            title
          }
        }
        author {
          node {
            name
          }
        }
        excerpt
        content
        date
        link
        tags {
          edges {
            node {
              slug
              id
              name
            }
          }
        }
        categories {
          edges {
            node {
              slug
              id
              name
            }
          }
        }
        comments {
          nodes {
            author {
              node {
                id
                name
              }
            }
            content
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    categories {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

// single post - detail page
const GET_POST_BY_SLUG = gql`
  query getPostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      id
      slug
      title
      featuredImage {
        node {
          id
          sourceUrl
          altText
          title
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      excerpt
      content
      date
      link
      tags {
        edges {
          node {
            id
            name
          }
        }
      }
      categories {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
      comments(where: { order: ASC }) {
        edges {
          node {
            id
            author {
              node {
                avatar {
                  url
                }
                name
              }
            }
            content
            parent {
              node {
                parentId
              }
            }
            replies(where: { order: ASC }) {
              edges {
                node {
                  id
                  content
                  author {
                    node {
                      avatar {
                        url
                      }
                      name
                    }
                  }
                  parentId
                  replies(where: { order: ASC }) {
                    edges {
                      node {
                        id
                        content
                        author {
                          node {
                            avatar {
                              url
                            }
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

//filter posts by category
const GET_ALL_POSTS_FROM_CATEGORY = gql`
  query getPostsFromCategory(
    $after: String
    $id: ID!
  ) {
    category(id: $id, idType: SLUG) {
      name
      id
      slug
      language {
        code
        slug
      }
      posts(first: 6, after: $after) {
        nodes {
          id
          slug
          title
          featuredImage {
            node {
              id
              sourceUrl
              altText
              title
            }
          }
          author {
            node {
              name
            }
          }
          excerpt
          content
          date
          link
          tags {
            edges {
              node {
                slug
                id
                name
              }
            }
          }
          categories {
            edges {
              node {
                slug
                id
                name
              }
            }
          }
          comments {
            nodes {
              author {
                node {
                  id
                  name
                }
              }
              content
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

//filter posts by tag
const GET_ALL_POSTS_FROM_TAG = gql`
  query getPostsFromTag($after: String, $id: ID!) {
    tag(id: $id, idType: SLUG) {
      name
      id
      posts(first: 6, after: $after) {
        nodes {
          id
          slug
          title
          featuredImage {
            node {
              id
              sourceUrl
              altText
              title
            }
          }
          author {
            node {
              name
            }
          }
          excerpt
          content
          date
          link
          tags {
            edges {
              node {
                slug
                id
                name
              }
            }
          }
          categories {
            edges {
              node {
                slug
                id
                name
              }
            }
          }
          comments {
            nodes {
              author {
                node {
                  id
                  name
                }
              }
              content
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

// show all custom posts on the page
const GET_ALL_CUSTOM_POSTS = gql`
  query getAllCustomPosts {
    customPosts(first: 3) {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            id
            sourceUrl
            altText
            title
          }
        }
        author {
          node {
            name
          }
        }
        excerpt
        content
        date
        link
      }
    }
  }
`;

// show single page
const GET_SINGLE_PAGE = gql`
  query singlePage($id: Int = 21) {
    pages(where: { id: $id }) {
      nodes {
        title
        id
        content
        acfpages {
          pageVisible
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;

// show contact info on page
const GET_CONTACT_PAGE = gql`
  query singlePage($id: Int = 77) {
    pages(where: { id: $id }) {
      nodes {
        title
        id
        content
        acfContactInfo {
          address
          email
          facebook
          ico
          info1
          info2
          instagram
          phone
        }
        acfpages {
          pageVisible
        }
      }
    }
  }
`;

//show all categories 
const GET_ALL_CATEGORIES = gql`
  query allCategories {
    categories(first: 22) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

//show all tags 
const GET_ALL_TAGS = gql`
  query allTags {
    tags(first: 22) {
      edges {
        node {
          slug
          tagId
          name
        }
      }
    }
  }
`;


const LOGIN_USER = gql`
  mutation LoginUser($password: String!, $username: String!) {
    login(
      input: {
        username: $username
        password: $password
      }
    ) {
      authToken
      user {
        id
        name
      }
    }
  }
`;

export {
  GET_ALL_POSTS,
  GET_POST_BY_SLUG,
  GET_ALL_POSTS_FROM_CATEGORY,
  GET_ALL_POSTS_FROM_TAG,
  GET_ALL_CUSTOM_POSTS,
  GET_SINGLE_PAGE,
  GET_CONTACT_PAGE,
  GET_ALL_CATEGORIES,
  GET_ALL_TAGS,
  LOGIN_USER
};














