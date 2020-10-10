import React from 'react'
import './index.scss'
function PageWarpper() {
    return (
        <div className="app-wrapper">
            <div className="sidebar">侧边栏</div>
            <div className="main-container">
                <div className="main-header">
                    <div className="nav">导航栏</div>
                </div>
                <div className="app-main">中心内容</div>
            </div>
        </div>
    )
}

export default PageWarpper