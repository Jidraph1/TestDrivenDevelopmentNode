const { v4 } = require("uuid");
const mssql = require("mssql");
const { sqlConfig } = require("../Config/config");

const createStudent = async(req, res)=>{
    try {
        // createStudent
        const id = v4()

        const {student_name, class, fee,} = req.body

        const pool = await mssql.connect(sqlConfig)

        if(pool.connected){

            console.log(req.body);

        const result = await pool.request()
        .input('id', mssql.VarChar, id)
        .input('student_name', mssql.VarChar, student_name)
        .input('class', mssql.VarChar, class)
        .input('fee', mssql.Int, fee)

        .execute('createStudentPROC')



        if(result.rowsAffected == 1){
        return res.json({
            message: "Student created Successfully",
        })  
        }else{
            return res.json({message: "Creation failed"})
        }   
    }
    } catch (error) {
        return res.json({error})
    }

    // const getAllStudents = async (req,res)=>{
    //     try {
    
    //         const pool = await (mssql.connect(sqlConfig))
    
    //         const students = (await pool.request().execute('getAllStudents')).recordset
    //         res.json({all_students: students})
    //     } catch (error) {
    //         return res.json({error})
    //     }
    // }
}

module.exports ={
    createStudent
    
}