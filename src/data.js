const projects = [
    /*
    Statuses:
    Live: Project is live and can be viewed.
    Awaiting API Approval: Project is awaiting approval from an API.
    In Development: Project is in development and not live.
    */
    {
        title: 'Devjobs Invoicing',
        description: `
        Full stack Invoice app using MERN Stack.
        First full-stack project, learned data handling, 
        and aimed to implement jobs from an API for tracking applications.`,
        image: '/projects/Invoice.png',
        live_site_link: 'https://invoice-app-brx.netlify.app/',
        github_link: 'https://github.com/Braxton-Jones/invoice',
        tags: ['React', 'MongoDB', 'Node.js'],
        status: {
            message: 'Live',
            color: '#90e388',
        },
        blog_link: '',
    },
    {
        title: 'Markdown Editor App',
        description: `
        Full stack markdown editor with real-time text to markdown functionality.
        Used MERN Stack, focused on learning. 
        Plans to organize Markdown Files by user.`,
        image: '/projects/Markdown.png',
        live_site_link: 'https://braxton-markdown-app.netlify.app/',
        github_link: 'https://github.com/Braxton-Jones/markdown-app',
        tags: ['React', 'MongoDB', 'Node.js', 'Markdown'],
        status: {
            message: 'Live',
            color: '#90e388',
        },
        blog_link: '',
    },
    {
        title: 'Audiophile Ecommerce',
        description: `
        Ecommerce website built with React and Redux.
        Explored basics of store functionalities, 
        aiming to enhance with animations and better UX.`,
        image: '/projects/Audiophile.png',
        live_site_link: 'https://audiophile-brx.netlify.app/',
        github_link: 'https://github.com/Braxton-Jones/Audiophile',
        tags: ['React', 'Redux', 'Ecommerce'],
        status: {
            message: 'Live',
            color: '#90e388',
        },
        blog_link: '',
    },
    {
        title: 'Setlist',
        description: `
        Playlist sharing app built with React and Spotify's API.
        Added functionality to share playlists with friends.
        Added extra metadata to searching for playlists such as genre and featured artists.`,
        image: '/projects/Setlist.png',
        live_site_link: '', //https://setlist-brx.netlify.app/
        github_link: 'https://github.com/Braxton-Jones/.setlist',
        tags: ['React', 'Spotify API'],
        status: {
            message: 'Awaiting API Approval',
            color: '#f3e926',
        },
        blog_link: '',
    },
    {
        title: 'brx-blog',
        description:
            'Personal blog built with Next.js and Sanity.io. Focused on learning and implementing a CMS. Plans to add more content!',
        image: '/projects/BrxBlog.png',
        live_site_link: 'https://brx-blog-braxton-jones.vercel.app/',
        github_link: 'https://github.com/Braxton-Jones/brx-blog',
        tags: ['Next.js', 'Sanity.io'],
        status: {
            message: 'Live',
            color: '#90e388',
        },
        blog_link: '',
    },
]

export default projects
