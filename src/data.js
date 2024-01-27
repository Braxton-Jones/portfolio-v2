const projects = [
    /*
    Statuses:
    Live: Project is live and can be viewed.
    Awaiting API Approval: Project is awaiting approval from an API.
    In Development: Project is in development and not live.
    */
    {
        title: 'Devjobs',
        description: `
        Full stack Invoice app using MERN Stack.
        First full-stack project, learned data handling, 
        and aimed to implement jobs from an API for tracking applications.`,
        image: 'Your_Image_URL_Here',
        live_site_link: 'https://invoice-app-brx.netlify.app/',
        github_link: 'https://github.com/Braxton-Jones/invoice',
        tags: ['MERN Stack', 'Full Stack', 'Database'],
        status: 'Live'
    },
    {
        title: 'Markdown Editor App',
        description: `
        Full stack markdown editor with real-time text to markdown functionality.
        Used MERN Stack, focused on learning. 
        Plans to organize Markdown Files by user.`,
        image: 'Your_Image_URL_Here',
        live_site_link: 'https://braxton-markdown-app.netlify.app/',
        github_link: 'https://github.com/Braxton-Jones/markdown-app',
        tags: ['MERN Stack', 'Markdown Editor', 'Real-time Text'],
        status: 'Live',
        blog_link: 'Your_Blog_URL_Here'
    },
    {
        title: 'Audiophile Ecommerce',
        description: `
        Ecommerce website built with React and Redux.
        Explored basics of store functionalities, 
        aiming to enhance with animations and better UX.`,
        image: 'Your_Image_URL_Here',
        live_site_link: 'https://audiophile-brx.netlify.app/',
        github_link: 'https://github.com/Braxton-Jones/Audiophile',
        tags: ['React', 'Redux', 'Ecommerce'],
        status: 'Live',
        blog_link : 'Your_Blog_URL_Here'
    },
    {
        title: 'Setlist',
        description: `
        Playlist sharing app built with React and Spotify's API.
        Added functionality to share playlists with friends.
        Added extra metadata to searching for playlists such as genre and featured artists.`,
        image: 'Your_Image_URL_Here',
        live_site_link: 'https://setlist-brx.netlify.app/',
        github_link: 'https://github.com/Braxton-Jones/.setlist',
        tags: ['React', 'Spotify API'],
        status: 'Awaiting API Approval',
        blog_link: 'Your_Blog_URL_Here'
    } ,
    {
        title: 'brx-blog',
        description: `
        Blog built with Next.js and Sanity.io.
        Built to get familiar with Next.js and showcase my projects.`,
        image: 'Your_Image_URL_Here',
        live_site_link: null,
        github_link: null,
        tags: ['Next.js', 'Sanity.io'],
        status: 'Live',
        blog_link: 'Your_Blog_URL_Here'

    }
]

export default projects
