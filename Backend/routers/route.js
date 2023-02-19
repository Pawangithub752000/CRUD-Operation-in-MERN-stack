const express = require("express");

const router = new express.Router();
const UserDetails = require("../models/user");
// we will handle post request 
router.post("/users", async (req, res) => {
    try {
        const addingUsersRecords = new UserDetails(req.body)
        console.log(req.body);
        const insertUser = await addingUsersRecords.save();
        res.status(201).send(insertUser);
    } catch (e) {
        res.status(400).send(e)
    }
})

//We will handle get request of all database data:-
router.get("/users", async (req, res) => {
    try {
       const getUsers = await UserDetails.find({}).sort({"ranking":1});
        res.send(getUsers);
    } catch (e) {
        res.status(400).send(e)
    }
})
//We will handle get request for individuals data:-
router.get("/users/:id", async(req, res) => {
    try{
     const _id = req.params.id;   
     const getUsers = await UserDetails.findById({_id:_id});
     res.send(getUsers);
    }catch(e){
      res.status(400).send(e);
    }
})

// we will handle patch req of indv
router.patch("/users/:id", async(req,res) => {
try{
    const _id = req.params.id;
        const getUsers = await UserDetails.findByIdAndUpdate(_id,req.body, {
        new:true
        });
    res.send(getUsers);
}catch(e){
    res.status(400).send(e);
}
})

//we will handle Delete req of indv
router.delete("/users/:id", async(req,res) => {
    try{
        // const _id = req.params.id;
            const getUsers = await UserDetails.findByIdAndDelete(req.params.id);
        res.send(getUsers);
    }catch(e){
        res.status(400).send(e);
    }
    })

module.exports = router;