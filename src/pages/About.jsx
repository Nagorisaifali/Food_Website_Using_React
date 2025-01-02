import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box , Typography} from '@mui/material'
const About = () => {
  return (
    <Layout>
      <Box sx={{my:15 , textAlign:'center',  p:2 , "& h4" : {fontWeight:"bold" , my:2 , fontSize:"2rem"}, "& p": { textAlign:'justify'  } , "@media (max-width:600px)" : {mt:0 ,  "& h4 " : {fontSize : "1.5rem" }} }}>
        <Typography variant='h4'>
            Welcome to Resturant 
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem modi fugiat architecto provident, ad sint iure labore et enim. Reprehenderit, obcaecati dolor eaque laudantium nihil quae reiciendis quas, suscipit voluptatum molestias esse, ratione quis ea et quisquam. Velit fuga sint praesentium nam temporibus eius et totam enim beatae officiis.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deserunt saepe dolorem placeat odio similique dolores beatae accusantium qui repellendus. Aperiam, optio soluta animi magni natus error sed, quibusdam velit temporibus, a eligendi cupiditate. Libero cum officiis laudantium et quas molestiae hic commodi, asperiores quia esse quasi, alias repellendus veniam aliquid soluta quam accusamus ex eaque similique voluptatibus quod. Nostrum delectus reprehenderit nulla quaerat quasi deserunt possimus voluptatem sint molestias perspiciatis quae, labore placeat at dignissimos fugiat suscipit consequuntur qui ducimus unde sunt dolore officia eius. Iusto necessitatibus libero maxime quo asperiores aspernatur illo doloremque molestias, blanditiis fugiat perferendis consequatur!</p>
      </Box>
    </Layout>
  )
}

export default About
