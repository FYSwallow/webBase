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
const isEvent = key => key.startsWith('on')
const isProperty = key => key !== "children" && !isEvent(key)
const isNew = (prev, next) => key => prev[key] !== next[key]
const isGone = (prev, next) => key => !(key in next)
function updateDom(dom, prevProps, nextProps) {
    Object.keys(prevProps)
    .filter(isEvent)
    .filter(key => {
        !(key in nextProps) || isNew(prevProps, nextProps)(key)
    })
    .forEach(name => {
        const eventType = name.toLowerCase().substring(2)
        dom.removeEventListener(
            eventType, prevProps[name]
        )
    })

    Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach(name => {
        dom[name] = ""
    })

    Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
        dom[name] = nextProps[name]
    })

    Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
        const eventType = name.toLowerCase().substring(2)
        dom.addEventListener(
            eventType,
            nextProps[name]
        )
    })
}
function commitRoot() {
    deletions.forEach(commitWork)
    commitWork(wipRoot.child)
    currentRoot = wipRoot
    wipRoot = null
}

function commitWork(fiber) {
    if (!fiber) {
        return
    }
    const domParent = fiber.parent.dom
    if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
        domParent.appendChild(fiber.dom)
    } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
        updateDom(
            fiber.dom,
            fiber.alertnate.props,
            fiber.props
        )
    }else if (fiber.effectTag === "DELETION") {
        domParent.removeChild(fiber.dom)
    }

    commitWork(fiber.child)
    commitWork(fiber.sibling)
}


function render(element, container) {
    wipRoot = {
        dom: container,
        props: {
            children: [element]
        },
        alertnate: currentRoot
    }
    deletions = []
    nexitUnitOfWork = wipRoot
}

let nextunitOfWork = null
let wipRoot = null
let currentRoot = null
let deletions = null

function workLoop(deadLine) {
    let shouldYield = false
    while (nextunitOfWork && !shouldYield) {
        nextunitOfWork = performUnitOfWork(
            nextunitOfWork
        )
        shouldYield = deadLine.timeRemaining() < 1
    }

    if (!nextunitOfWork && wipRoot) {
        commitRoot()
    }

    requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)


function performUnitOfWork(fiber) {
    if (fiber.child) {
        return fiber.child
    }

    let nextFiber = fiber
    while (nextFiber) {
        if (nextFiber.sibling) {
            return nextFiber.sibling
        }
        nextFiber = nextFiber.parent
    }
    if (!fiber.dom) {
        fiber.dom = createDom(fiber)
    }

    const elements = fiber.props.children
    reconcileChildren(fiber, elements)


}
function reconcileChildren(wipFiber, elements) {
    let index = 0
    let oldFiber = wipRoot.alertnate && wipFiber.alertnate.child
    let preSibling = null

    while (index < elements.length || oldFiber != null) {
        const element = elements[index]
        let newFiber = null
        /*  const newFiber = {
             type: element.type,
             props: element.props,
             parent: fiber,
             dom: null
         } */

        const sameType = oldFiber && element && element.type == oldFiber.type
        if (sameType) {
            newFiber = {
                type: oldFiber.type,
                props: element.props,
                dom: oldFiber.dom,
                parent: wipFiber,
                alertnate: oldFiber,
                effectTag: 'UPDATE'
            }
        }
        if (element && !sameType) {
            newFiber = {
                type: element.type,
                props: element.props,
                dom: null,
                parent: wipFiber,
                alertnate: null,
                effectTag: 'PLACEMENT'
            }
        }

        if (oldFiber && !sameType) {
            oldFiber.effectTag = "DELETION"
            deletions.push(oldFiber)
        }

        if (index === 0) {
            fiber.child = newFiber
        } else {
            preSibling.sibling = newFiber
        }

        preSibling = newFiber
        index++
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
