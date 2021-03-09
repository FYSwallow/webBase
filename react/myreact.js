function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child =>
                typeof child === 'object'
                    ? child
                    : createTextElement(child))
        }
    }
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    }
}
/* 
function render(element, container) {
    const dom =
        element.type == "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(element.type)

    const isProperty = key => key !== "children"
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = element.props[name]
        })

    element.props.children.forEach(child =>
        render(child, dom)
    )

    container.appendChild(dom)
} */

function createDom(fiber) {
    const dom =
        fiber.type === "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(fiber.type)
    const isProperty = key => key !== "children"
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = element.props[name]
        })

    return dom

}

function commitRoot() {
    commitWork(wipRoot.child)
    wipRoot = null
}

function commitWork (fiber) {
    if (!fiber) {
        return
    }
    const domParent = fiber.parent.dom
    domParent.appendChild(fiber.dom)
    commitWork(fiber.child)
    commitWork(fiber.sibling)
}


function render(element, container) {
    wipRoot = {
        dom: container,
        props: {
            children: [element]
        }
    }

    nexitUnitOfWork = wipRoot
}

let nextunitOfWork = null
let wipRoot = null

function workLoop(deadLine) {
    let shouldYield = false
    while (nextunitOfWork && !shouldYield) {
        nextunitOfWork = performUnitOfWork(
            nextunitOfWork
        )
        shouldYield = deadLine.timeRemaining() < 1
    }

    requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)


function performUnitOfWork(fiber) {
    if (!fiber.dom) {
        fiber.dom = createDom(fiber)
    }
    if (fiber.parent) {
        fiber.parent.dom.appendChild(fiber.dom)
    }

    const elements = fiber.props.children
    let index = 0
    let preSibling = null
    while(index < elements.length) {
        const element = elements[index]

        const newFiber = {
            type: element.type,
            props: element.props,
            parent: fiber,
            dom: null
        }

        if (index === 0) {
            fiber.child = newFiber
        } else {
            preSibling.sibling = newFiber
        }

        preSibling = newFiber
        index ++ 
    }

    if (fiber.child) {
        return fiber.child
    }

    let nextFiber = fiber
    while(nextFiber) {
        if (nextFiber.sibling) {
            return nextFiber.sibling
        }
        nextFiber = nextFiber.parent
    }
}

const MyReact = {
    createElement,
    createTextElement,
    render
}

const element = MyReact.createElement(
    "div",
    { id: "foo" },
    MyReact.createElement("a", null, "bar"),
    ...Array(300).fill("li").map((item, index) => {
        return MyReact.createElement(item, null, index)
    })
)


const container = document.getElementById('root')
MyReact.render(element, container)


/*
requestIdleCallback(myNonEssentialWork, { timeout: 2000 });
// 任务队列
const tasks = [
 () => {
   console.log("第一个任务");
 },
 () => {
   console.log("第二个任务");
 },
 () => {
   console.log("第三个任务");
 },
];
function myNonEssentialWork (deadline) {
  // 如果帧内有富余的时间，或者超时
  while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && tasks.length > 0) {
    work();
  }
  if (tasks.length > 0)
    requestIdleCallback(myNonEssentialWork);
}
function work () {
  tasks.shift()();
  console.log('执行任务');

}

*/
