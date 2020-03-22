# Dynamic-Web-Development
## Final Project

### Proposal


For my final project I have been thinking on how to connect what I have learned in the class and what I have also learn working with the Raspberry PI and Arduino. I wanted to somehow have my own "backyard" of connections I have going around. For eample, If I am having any one of my Microncontrollers sending any type of data from a sensor, I will be able to see it graphed in my webpage. This way, I can create a boilerplate for myself to store my data in some database online, and also have options of seeing multiple devices at the same time through some kind of appealing UI. Also, If I can input this data into my site I might be able to connect it to any other input or output, video stream, etc... in the future. I have two PIs and two arduinos laying around, so I might as well put them to use now.

I would start with documenting MongoDB's limits, maybe look at Heroku instead of Glitch also, or some other service that allows seamless updating. After the data can be fetched, I would grab the data stream and implement it into the UI. I would make an object for each of my sensors to send to my database, with a key/value pair which would correspond to :


```
    {
        "IP Address": "",
        "Device Type": "",
        "Timestamp":"",
        "Sensor_1": "SensorData"
        "Sensor_1_MinValue":"",
        "Sensor_1_MaxValue":""
    }
```

And then send I would pull those values with to my server in order for the client to render them in what I hope can be almost real time. I also have to think about if it is necessary to 'purge' my server of data every certain amount of requests.

I would be very grateful If I could receive advice as to how to be able to update my server values as auickly as the values enter my server. Is Heroku better than MonDB for this task? Is this too out of scale? I think of it as a stepping stone towards my future "swiss knife device control monitor".


References: 
1. I saw this tool called [Alooma Live](https://www.alooma.com/getlive), for working with data streams. [Here is how it looks in action](https://www.alooma.com/live).
2. I also know D3 and Three.js are options.


## Setup
***

 - This project runs on Node.js and npm. To set up the project you must have these installed and running. You can find more detailed instructions below.
 - This project also has a database currently setup in MongoDB.
  

### Prerequisites



### Installation

  1. Download this repository to your computer.
  2. Open your terminal in the repository folder.
  3. Make sure you have npm and node.js installed. You can check this with the following commands:
   `npm - v` 
   `node -v`
  4. If npm and/or node.js are not installed, you may follow this easy to follow guide from Tania Rascia. [How to Install and Use Node.js and npm (Mac, Windows, Linux)](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)
  5. Create a MongoDB Database and a Collection in the MongoDB Atlas Platform. More details of how to do this below.  
  5. Once everything is installed, type in the following command while in the repository folder:
  `npm start`
  6. Open your preferred browser and in the address bar type in `http://localhost:3000/`

#### MongoDB Database Setup

1. First we have to make an account in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). 

2. After that is done, we have to create a cluster. There should be something like the screen below in the "Clusters" Menu of our project. Here we press "Build a Cluster".

![Setting Up MongoDB Atlas Cloud 1](public/assets/images/mongoDB1.PNG)

3. Select create a cluster.

![Setting Up MongoDB Atlas Cloud 2](public/assets/images/mongoDB2.PNG)

4. Select a Cloud Provider and Region. And then press "Create Cluster".

![Setting Up MongoDB Atlas Cloud 3](public/assets/images/mongoDB3.PNG)

5. Wait for some time while it is created.

![Setting Up MongoDB Atlas Cloud 4](public/assets/images/mongoDB4.PNG)

6. Voila! A cluster is born. Here is where our data will live.
   
![Setting Up MongoDB Atlas Cloud 5](public/assets/images/mongoDB5.PNG)

1. On "Whitelist a connection IP address" we put 0.0.0.0 to have open access from anywhere. Also, we create a user and password.

![Setting Up MongoDB Atlas Cloud 6](public/assets/images/mongoDB6.PNG)

8. Finally, Connect your application will give us a link which we will add to our `.env` file in our server. 

![Setting Up MongoDB Atlas Cloud 7](public/assets/images/mongoDB7.PNG)


### Develop

To develop this document, you can follow the steps provided below:
1. Create a fork of this project on Github.
2. Ping the author of this repo via Github Issues to see if they are looking for contributions with the specific feature you're looking to add.
3. Open the file in VS Code and make updates.
4. Add and commit those changes in your forked Github repo.
5. Make a pull request specifying what additions and changes were made.
6. Have a nice chat and open communication with me about those changes. 
7. Celebrate the contribution! 

## Built with
***
* [VS Code](https://code.visualstudio.com/)
* [Github](https://github.com)
* [Node.js](https://nodejs.org)
* [npm](npmjs.com)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Postman](https://www.postman.com/)

***
## Author

* [Alvaro Lacouture](https://alvarolacouture.com) 

***
## Acknowledgements

* [Joey Lee](https://jk-lee.com) -- adjunct professor -- [NYU ITP](https://itp.nyu.edu)
* [Cassie Tarakajian](https://cassietarakajian.com/) -- adjunct professor -- [NYU ITP](https://itp.nyu.edu)
* [The Good Project Readme Project](https://github.com/itp-dwd/2020-spring/blob/master/templates/readme-template.md)

***
## Notes & Process

### Process & Documentation

#### Setting up Heroku

![Creating a new app in Heroku](public/assets/images/process_Heroku0.PNG)

![Entering appname](public/assets/images/process_Heroku00.PNG)

![Connecting Github to Heroku](public/assets/images/process_Heroku1.PNG)

![Entering the repository link](public/assets/images/process_Heroku2.PNG)

Update your git. In windows you can download it [here.](https://git-scm.com/download/win)

![Git](public/assets/images/gitDownload.PNG)

## Challenges & Struggles

### CSS MIME type error


## Questions



## References

