import React, { useContext, useState } from 'react'
import { QuizContext } from '../../../Helpers/Contexts'
import { Questions } from '../../../Helpers/JavaScriptQuestionBank'
import Coding from '../Coding.svg'
import Success from '../Jan-Success_1.jpg'

const JavaScriptQuiz = () => {

    const { gameStart, setGameStart } = useContext(QuizContext);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnserButtonClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            console.log(score);
        }
        const nextQuiz = currentQuiz + 1;
        if (nextQuiz < Questions.length) {
            setCurrentQuiz(nextQuiz);
        }
        else {
            setShowScore(true);
        }
    }

    const reStart = () => {
        setShowScore(false);
        setScore(0);
        setCurrentQuiz(0);
    }

    return (
        <div className='container py-3'>
            <div>
                <div className="row  ">
                    <div className="col pt-2">
                        {showScore ?
                            (<p className="f-2 fw-bold">Result Page</p>)
                            :
                            (<p className="f-2 fw-bold">JavaScript Quiz</p>)
                        }
                    </div>
                    {showScore ?
                        ""
                        :
                        (<div className='col text-end'><button className='btn btn-success' onClick={() => setGameStart("MainMenu")}><i className="fa fa-chevron-circle-left" aria-hidden="true"></i> Go Back</button></div>)
                    }
                </div>
                <hr />
            </div>

            {showScore ? (
                <div className="container" id="scor">
                    <div className="row d-flex justify-content-center">
                        <div className="col col-md-6">
                            <div className="card mb-3">
                                <div className="card-header fs-2">
                                    Result:
                                </div>
                                <div className="card-body text-center">

                                    {score == 10 ?(
                                        <img src={Success} alt="" className="img-fluid" width="300px" id="success-img" />
                                    ):(
                                        ""
                                    )}

                                    <div className="fs-4"><span id="score"></span>{score} of {Questions.length}</div>

                                    <div className="fs-5"><span id="avg"></span>{score * 100 / 10} %</div>


                                    {
                                        score == 10 ? (
                                            <div className="fs-5">Perfect!!!</div>
                                        ) : (
                                            <div className="fs-5">You can be proud of yourself!</div>
                                        )
                                    }

                                </div>
                                <div className="card-footer">
                                    <div className="row text-center">
                                        <div className='col-12 col-lg-6 mb-2 '><button className="btn btn-primary" onClick={reStart}>Try Again</button></div>
                                        <div className="col-12 col-lg-6"><button className="btn btn-success" onClick={() => setGameStart("MainMenu")}>Back to Quizzes</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) :
                (<div className='row align-items-center'>

                    <div className='col-12 text-center d-md-none my-3'>
                        <img src={Coding} className='img-fluid' width='400' />
                    </div>

                    <div className='col-12 col-md-7'>
                        <div className="card">
                            <h6 className="card-header p-3">{Questions[currentQuiz].questionText}</h6>
                            <div className="card-body">
                                <div className='d-grid gap-2'>
                                    {Questions[currentQuiz].answerOption.map((answerOption) => (
                                        <button className="btn bg-body-secondary p-3 card-text text-start h6" onClick={() => handleAnserButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="card-footer text-muted text-center">
                                Question {currentQuiz + 1} of {Questions.length}
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-5 text-center d-none d-md-block'>
                        <img src={Coding} className='img-fluid' width='400' />
                    </div>
                </div>)
            }
        </div>
    )
}

export default JavaScriptQuiz