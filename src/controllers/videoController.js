import Video from "../models/Video";


export const home = async(req,res) => {
    const videos = await Video.find({});
    return res.render("home",{pageTitle : "Home", videos});
}

export const watch = (req,res)=> {
    const id = req.params.id;   
    return res.render("watch",{ pageTitle: `Watching: `});
}
export const getEdit = (req,res) => {
    const id = req.params.id;
    return res.render("edit",{pageTitle : `Editing: `});
}
export const postEdit = (req,res) => {
    const id = req.params.id;
    const title = req.body.title;
   
    return res.redirect(`/videos/${id}`);
    
}

export const getUpload = (req,res) => {
    return res.render("upload",{pageTitle:"Upload video"});
}

export const postUpload = async(req,res) => {
   const {title, description, hashtags} = req.body;
   try{
   await Video.create({
       title : {type: String, required:true},
       description: {type: String, required:true},
       createdAt: Date.now(),
       hashtags:hashtags.split(",").map((word) => `#${word}`),
     
   }); 
    return res.redirect("/");
} catch(error){
    return res.render("upload", {
        pageTitle: "Upload Video", 
        errorMessage: error._message
    });
}}


