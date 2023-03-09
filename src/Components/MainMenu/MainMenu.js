import React, { useContext } from 'react'
import Logo from './Images/3684.png'

import { QuizContext } from '../../Helpers/Contexts'
import { QuestionTitle } from '../../Helpers/QuestionTitle'
import './MainMenu.css'

const MainMenu = () => {

    const { gameStart, setGameStart } = useContext(QuizContext);

    return (
        <div className='container-fliud bg-light bg-gradient'>
            <div className='container py-5 pb-2'>
                <div className='row align-items-center'>
                    <div className="col-sm-12 col-md-6 text-center p-3 d-sm-block d-md-none">
                        <img src={Logo} alt="" className="img-fluid rounded" width="300px" />
                    </div>

                    <div className="col-sm-12 col-md-8 mb-3 mar">
                        <h2 className="text-primary fw-bold">Hello There!</h2>

                        <p className="text-muted">Welcome to My Online Qiuz <i className="fa fa-smile-o" aria-hidden="true"></i></p><hr />

                        {QuestionTitle[0].QuizDiscription.map((QuizDiscription) => {
                            return (
                                <p className='text-justify'>{QuizDiscription.Para1} <br /> <br /> {QuizDiscription.Para2}</p>
                            )
                        })}

                        <p className='badge text-bg-primary'>Good luck!</p>
                    </div>

                    <div className="col-sm-12 col-md-4 text-center p-3 d-none d-md-block">
                        <img src={Logo} alt="" className="img-fluid rounded" width="550px" />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-3">
                    {QuestionTitle[0].Quiz.map((QuestionTitle) => {
                        return (
                            <div class="col text-center">
                                <div class="card h-100" style={{ backgroundColor: QuestionTitle.color }}>
                                    <div class="card-body">
                                        <h3 class="card-title">{QuestionTitle.Title}</h3>
                                        <p class="card-text">{QuestionTitle.discription}</p>
                                    </div>
                                    <div class="mb-3">
                                        <button class="btn btn-success" type="button" onClick={() => { setGameStart(QuestionTitle.btnAction) }}>Start Quiz</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default MainMenu