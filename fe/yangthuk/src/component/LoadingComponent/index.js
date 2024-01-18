import { Spin } from 'antd'
import React from 'react'

const Loading = ({ children, isLoading, deday = 3000 }) => {
    return (
        <Spin spinning={isLoading} delay={deday}>
            {children}
        </Spin>
    )
}

export default Loading