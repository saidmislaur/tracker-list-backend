import TaskModel from "../models/task.js";

export const getAll = async (req, res) => {
  try {
    const tasks = await TaskModel.find()
    res.json(tasks)
  } catch (error) {
    console.log(error)
    res.status(505).json({
      message: 'не удалось получить задачи'
    })
  }
}

export const create = async (req, res) => {
  const doc = new TaskModel({
    text: req.body.text,
    desc: req.body.desc,
    checked: req.body.checked
  })
  const task = doc.save();

  res.json({
    message: "успешно добавлен"
  })
}

export const remove = async (req, res) => {
  try {
    const taskId = req.params.id;
    TaskModel.findByIdAndDelete({
      _id: taskId
    }, (err, doc) => {
      if(err) {
        console.log(err)
        return res.json({
          message: 'не удалость удалить статью'
        })
      }
      if(!doc) {
        return res.json({
          message: 'задача не найдена'
        })
      }
      res.json('задача удалена')
    }) 
  } catch (error) {
    console.log(error)
    res.status(505).json({
     message: 'не удалось получить задачу'
   })
  }
}

export const done = async (req, res) => {
  try {
    const taskId = await req.params.id;
    await TaskModel.findByIdAndUpdate({
      _id: taskId
    },{
      text: req.body.text,
      desc: req.body.desc,
      checked: req.body.checked
    } 
    )
    res.json('задача выполнена')
  } catch (error) {
    console.log(error)
    res.status(505).json({
      message: 'ошибка задачи'
    })
  }
}

