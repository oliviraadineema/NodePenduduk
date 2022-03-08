const { Router } = require("express")
const express = require(`express`)
const pendudukController = require("../controllers/pendudukController")
const router = express.Router()
const {checkToken} = require("../auth/tokenvalidation")

const{
    getAllPenduduk,
    getPenduduk,
    postPenduduk,
    deletePenduduk,
    putPenduduk,
    regristrasi,
    login
} = require('../controllers/pendudukcontroller')

// router.route('/: id').get(getPenduduk).put(putPenduduk).delete(deletePenduduk)
// router.route('/').get(getAllPenduduk).post(postPenduduk)

router.post('/', postPenduduk);
router.post('/regristrasi/', regristrasi);
router.post('/login', login)
//router.get('/', getAllPenduduk);
router.get('/:id', getPenduduk);
router.put('/:id', putPenduduk);
router.delete('/:id', deletePenduduk)
router.get('/',checkToken,getAllPenduduk)

module.exports = router