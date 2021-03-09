import React, { FC, ReactElement } from 'react'

interface PropsState {
    celsius: number
}
const BoilingVerdict: FC<PropsState> = ({
    celsius
}): ReactElement => {
    if (celsius >= 100) {
        return <p>水已经开了</p>;
    }
    return <p>水还没开</p>;
}

export default BoilingVerdict