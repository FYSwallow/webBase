import React, { ReactElement } from 'react';

interface MiddleContextProps {
    children: React.ReactNode
}
function MiddleContext(props: MiddleContextProps): ReactElement {
    return (
        <button>
            {props.children}
        </button>
    )
}

export default MiddleContext