const express = require('express')
const router = express.Router()

const multer = require('multer')
const storage = multer.diskStorage({
    destination : function(req,file,cb) {
        cb(null,'image/')
    },
    filename : function(req,file,cb) {
        cb(null,Date.now()+'_'+file.originalname)
    }
})
const upload = multer({storage: storage})

router.post('/',upload.single('avator'), async(req,res) => {
    res.json({ans:true})
})

module.exports = router