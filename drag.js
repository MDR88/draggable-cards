const DragDropManager = Object.create(null, {
    init: {
      value: () => {
        const stages = document.querySelectorAll(".stage")
  
        stages.forEach(stage => {
          // Gain reference of item being dragged
          stage.ondragstart = e => {
            e.dataTransfer.setData("text", e.target.classList)
          }
        })
  
  
        const targets = document.querySelectorAll(".target")
  
        targets.forEach(target => {
          // Dragover not supported by default. Turn that off.
          target.ondragover = e => e.preventDefault()
  
          target.ondrop = e => {
            // Enabled dropping on targets
            console.log(e.target)
            let articleTag = document.querySelector("article")
            if (e.target.childNodes.length === 0 && e.target.parentNode !== articleTag){
                e.preventDefault()
              const data = e.dataTransfer.getData("text")
              e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
            }
            else if (e.target.parentNode === articleTag  || e.target === document.querySelector("article")){
              e.preventDefault()
              const data = e.dataTransfer.getData("text")
              if (e.target.parentNode === articleTag){
                e.target.parentNode.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
              }

                else if (e.target === document.querySelector("article")){
                e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
                
              }

              // e.target.parentNode.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
            }
            
            else {
              console.log("nope")
            }
          }
        })
      }
    }
  })
  
  DragDropManager.init()