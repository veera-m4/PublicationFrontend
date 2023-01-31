import React from 'react'

import './statuscard.css'
import {
    FaBars,
    }from "react-icons/fa";
    import {
    FcConferenceCall
    }from "react-icons/fc";
    import {
    AiFillHome,
    AiOutlineFileAdd
    } from "react-icons/ai";
    import {
    BiBookAdd
    }from "react-icons/bi";
    import {
    GiWhiteBook
    } from "react-icons/gi";
    import {
    SiGooglescholar,
    SiScopus,
    } from "react-icons/si"

const StatusCard = props => {
    if(props.title === "Scopus")
    {
        return (
            <div className='status-card'>
                <div className="status-card__icon">
                    <SiScopus/>
                </div>
                <div className="status-card__info">
                    <div>
                        <div>h index = {props.content.hindex} </div>
                        <div>i index = {props.content.iindex} </div>
                    </div>
                    <span>{props.title}</span>
                </div>
            </div>
        )
    }
    else if(props.title === "google scholar")
    {
        return(
        <div className='status-card'>
                <div className="status-card__icon">
                <SiGooglescholar/>
            </div>
            <div className="status-card__info">
                <div>
                    <div>h index = {props.content.hindex} </div>
                    <div>i index = {props.content.iindex} </div>
                </div>
                <span>{props.title}</span>
            </div>
        </div>
        )
    }
    else if(props.title === "clarivate")
    {
        return(
        <div className='status-card'>
                <div className="status-card__icon">
                <FcConferenceCall/>
            </div>
            <div className="status-card__info">
                <div>
                    <div>h index = {props.content.hindex} </div>
                    <div>i index = {props.content.iindex} </div>
                </div>
                <span>{props.title}</span>
            </div>
        </div>
        )
    }
    else{
        return(
        <div className='status-card'>
                <div className="status-card__icon">
                <GiWhiteBook/>
            </div>
            <div className="status-card__info">
                <div>
                    <div>books = {props.content.Books} </div>
                    <div>conference = {props.content.Conference} </div>
                </div>
                <span>{props.title}</span>
            </div>
        </div>
        )
    }
}

export default StatusCard
