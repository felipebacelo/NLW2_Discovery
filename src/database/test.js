const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db)=>{
    //inserir dados 
    
    proffyValue = {
        name:"Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" ,
        whatsapp:"989567485914",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 

    }

    classValue ={
        subject:1, 
        cost:"20", 
        //o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados após cadastrar a aula
        {
            
        },
        {
            weekday:0,
            time_from:520,
            time_to:1220
        }
    ]
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    //consultar as classes de um determinado proffy e trazer os dados do professor
    const selectClassesAndProffys = await db.all(`
        
    `)

    // console.log(selectClassesAndProffys)

    //o horario que a pessoa trabalha, por exemplo, e das oito ate as dezoito
    //o horario do time_from (8h) precisa ser antes ou igual do solicitado
    //o time_to precisa ser acima

    const selectClassesSchedules = await db.all(`
        
    `)
    // console.log(selectClassesSchedules)
})