import React, { Component } from 'react';
import {GridRow, Header, GridColumn, Grid,Container, Item, ItemContent,ItemDescription,ItemHeader,ItemGroup} from "semantic-ui-react";


class myProjects extends Component{
    render(){
        return(

            <div id='textFade' style={{marginBottom: '0em', display:'block'}}>

                <div id='projectHeading'>
                    <Header as='h1' size='huge' textAlign="center" style={{color: 'white'}}>My Projects</Header>
                </div>

<div>
                <Grid container alignItems='flex-start' justify='flex-end' style={{marginBottom: '3em'}}>
                    <GridColumn>
                        <Header as='h1' size='huge' textAlign='center'style={{color: 'white'}}>Gator Trader</Header>
                        <font size='3' color='white'>
                            This is a web application created in my Software Engineering class at San Francisco State University. The goal of this
                            application was to create a site where SF State students could buy and sell their college items, with the main selling
                            point being the freedom to search your book based on your class number at SF State. The team was a global team, which consisted of 4 students from SF State and 3 students from Fulda University, all using
                            one GitHub Repository. I was appointed team lead and GitHub master. Some of my responsibilities included keeping the team on track
                            using software practices such as Agile/Scrum, designing the mock-ups and building the front end, and also
                            implementing some of the features such as search. The technologies used were Java, NodeJS, Express, Handlebars, Bootstrap, Trello,
                            and Google analytics. The project was deployed on an AWS server created by me.
                        </font>
                    </GridColumn>
                </Grid>
</div>
                <div>
 <Grid container alignItems='flex-start' justify='flex-end' columns={'two'} divided style={{ marginBottom: '2em'}}>

        <GridRow>


     <GridColumn>
         <Header as='h1' size='huge' textAlign='center' style={{color: 'white'}}>BookBusters</Header>
         <font size='3' color='white'>
             This is an iOS application built in the multimedia systems class as San Francisco State University. This team consisted of
             4 students from SF State. The goal of this app was to create a mobile application to buy and sell books. Responsiblities included
             using the SCRUM method to keep communication on tasks, connect and prototype different screens on the application, and implement the features
             to the front end created by one of the other team members. This was coded using the language Swift.
         </font>
     </GridColumn>

            <GridColumn>
                <Header as='h1' size='huge' textAlign='center' style={{color: 'white', display: 'block'}}>This Website!</Header>
                <font size='3' color='white'>
                    I built this portfolio in order to create a piece of work to send to companies. The technologies used are ones I have never used before,
                    and I did this in order to learn some of the new frameworks being used today. This portfolio was created using ReactJS, Semantic-UI, NodeJS, Express,
                    and Java.
                </font>
            </GridColumn>

        </GridRow>

</Grid>
                </div>
                <div id='resumeTab'>
                    <Header as='a' textAlign="center"  href={'https://drive.google.com/open?id=1u7hQ7yykJgQdIxe_cMhCzPGWAk-cfSwz'}
                            size='huge'  style={{color: 'white'}}>
                        Resume and Contact Info
                    </Header>
                </div>


            </div>
        )
    }
}

export default myProjects;