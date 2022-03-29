const { Comment} = require("../models/comment.model")
const { Job } = require("../models/job.model")

module.exports.allComments = (req, res) => {
    Comment.find()
        .then(comments=>res.json(comments))
        .catch(err=>res.status(400).json(err))
}


// get all comments of a job
module.exports.commentsOfOneJob = (req, res) => {
    Comment.find({job: req.params.jobId})
        .then(comments=>res.json(comments))
        .catch(err=>res.status(400).json(err))
}


// add a comment
module.exports.addComment = (req, res) => {
    const jobId = req.params.jobId
    const newComment = new Comment(req.body)
    newComment.job = jobId
    newComment.save()
        .then(comment=>{
            const job = Job.findOne({_id: jobId})
                .then(foundJob=>{
                    foundJob.comments.push(newComment)
                    foundJob.save()
                        .then(response=>res.json(response))
                })
        })
        .catch(err=>res.status(400).json(err))
}

// add a comment
module.exports.addComment2 = async(req, res) => {
    try{
        const newComment = new Comment(req.body)
        newComment.job = req.params.jobId
        await newComment.save()
    
        const job = await Job.findOne({_id:req.params.jobId})
        job.comments.push(newComment)
        await job.save()
        
        res.json(newComment)
    }catch(err){
        res.status(400).json(err)
    }

}
