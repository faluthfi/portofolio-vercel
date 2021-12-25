const projects=[
    {
        image:'/project-1',
        title:'Bootcamp Project',
        description:'This is a bootcamp (Binar Academy) project that i am involved in, the front-end was done using nextJS framework while the back-end was done using expressJS with postgresql as database most of my contribution is at the back-end and deployment, with some in the front-end especially the rock paper scissor game and redux',
        isFinished:true,
        tools:[
            'nextjs',
            'expressjs',
            'bootsrap',
            'redux',
            'postgres'
        ],
        git:{
            status:false,
            url:null
        },
        deploy:{
            status:true,
            url:'nextjs-kel3.herokuapp.com'
        }
    },
    {
        image:'/project-mock',
        title:'Mock Project 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nam deleniti repellendus reiciendis maiores nostrum sequi quasi. Impedit delectus non veritatis placeat dicta nulla, distinctio totam minus aperiam vel error cum dolor eos recusandae beatae repellendus incidunt magni explicabo, quasi aspernatur officia laudantium sequi quaerat obcaecati. Eveniet recusandae eos molestias quibusdam.',
        isFinished:true,
        git:{
            status:true,
            url:'#'
        },
        deploy:{
            status:true,
            url:'#'
        }
    },
    {
        image:'/project-mock',
        title:'Mock Project 2',
        description:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut harum provident accusantium temporibus eveniet rerum tempora facilis voluptates illum sunt dolorem commodi reiciendis, rem vero vitae alias explicabo ex debitis!',
        isFinished:true,
        git:{
            status:true,
            url:'#'
        },
        deploy:{
            status:false,
            url:null
        }
    },
    {
        image:'/project-mock',
        title:'Mock Project 3',
        description:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut harum provident accusantium temporibus eveniet rerum tempora facilis voluptates illum sunt dolorem commodi reiciendis, rem vero vitae alias explicabo ex debitis!',
        isFinished:false,
        git:{
            status:false,
            url:'#'
        },
        deploy:{
            status:false,
            url:null
        }
    },
    {
        image:'/project-mock',
        title:'Mock Project 4',
        description:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut harum provident accusantium temporibus eveniet rerum tempora facilis voluptates illum sunt dolorem commodi reiciendis, rem vero vitae alias explicabo ex debitis!',
        isFinished:false,
        git:{
            status:true,
            url:'#'
        },
        deploy:{
            status:false,
            url:null
        }
    },
]

export default function projectHandler(req, res) {
    res.status(200).json(projects)
  }