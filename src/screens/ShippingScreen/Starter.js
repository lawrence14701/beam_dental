import React from "react"
import StarterBox from "../../components/Card/Card"
import IconWithText from "../../components/IconAndText/IconAndText"
import uuid from "react-uuid"

function generateBoxes(boxes) {
  const nodeArr = []
  const leftOverNodes = []
  boxes.map((box) => {
    const color = Object.keys(box)[0]
    const { brushes } = Object.values(box)[0]
    const numOfBoxes = Math.floor(brushes / 2)
    const remainder = brushes % 2

    for (let i = 0; i < numOfBoxes; i += 2) {
      nodeArr.push({ color: color })
    }
    if (remainder > 0) {
      leftOverNodes.push({ color: color })
    }
  })
  return [nodeArr, leftOverNodes]
}

const Starter = (props) => {
  const { starter } = props
  const [sameColor, leftOvers] = generateBoxes(starter)
  const leftOverBoxes = []
  while (leftOvers.length !== 0) {
    if (leftOvers % 2 === 0) {
      const colorOne = Object.values(leftOvers.shift())[0]
      const colorTwo = Object.values(leftOvers.shift())[0]
      leftOverBoxes.push({ colorOne, colorTwo })
    } else {
      const colorOne = Object.values(leftOvers.shift())[0]
      leftOverBoxes.push({ colorOne })
    }
  }
  return (
    <>
      {sameColor.length === 0
        ? null
        : sameColor.map((node) => (
            <StarterBox key={uuid()}>
              <div>
                <IconWithText num="2" text="brushes" color={node.color} />
                <IconWithText num="2" text="replacement heads" color={node.color} />
              </div>
            </StarterBox>
          ))}
      {leftOverBoxes.length === 0
        ? null
        : leftOverBoxes.map((node) =>
            node.length > 1 ? (
              <StarterBox key={uuid()}>
                <div>
                  <IconWithText num="1" text="brushes" color={node.colorOne} />
                  <IconWithText
                    num="1"
                    text="replacement heads"
                    color={node.colorOne}
                  />
                  <IconWithText num="1" text="brushes" color={node.colorTwo} />
                  <IconWithText
                    num="1"
                    text="replacement heads"
                    color={node.colorTwo}
                  />
                </div>
              </StarterBox>
            ) : (
              <StarterBox key={uuid()}>
                <div>
                  <IconWithText num="1" text="brushes" color={node.colorOne} />
                  <IconWithText
                    num="1"
                    text="replacement heads"
                    color={node.colorOne}
                  />
                </div>
              </StarterBox>
            )
          )}
    </>
  )
}

export default Starter
