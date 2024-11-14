import React, { useState } from 'react';

const questions = [
    {
        question: "What's your favorite way to spend a weekend?",
        options: ["Exploring a new place", "Reading or creating art", "Chilling with friends", "Trying something exciting"]
    },
    {
        question: "If you could be any animal, what would you choose?",
        options: ["Eagle, for freedom", "Cat, for creativity", "Koala, for relaxation", "Tiger, for energy"]
    },
    {
        question: "What's your ideal vacation?",
        options: ["Backpacking through nature", "Exploring museums", "Lounging on the beach", "Adventure sports"]
    },
    {
        question: "Choose a favorite activity:",
        options: ["Hiking", "Drawing", "Watching movies", "Dancing"]
    },
    {
        question: "What's your biggest strength?",
        options: ["Curiosity", "Creativity", "Calmness", "Enthusiasm"]
    },
    {
        question: "How do you usually handle challenges?",
        options: ["With courage", "By thinking it through", "By staying calm", "By facing it head-on"]
    },
    {
        question: "Which type of book would you enjoy the most?",
        options: ["Adventure story", "Fantasy novel", "Self-help guide", "Motivational biography"]
    },
    {
        question: "What's your go-to comfort food?",
        options: ["Something exotic", "Homemade soup", "Pizza", "Spicy food"]
    },
    {
        question: "How do you prefer to spend a rainy day?",
        options: ["Reading or learning something new", "Doing a creative project", "Relaxing with a good movie", "Finding something active indoors"]
    },
    {
        question: "Which genre of movies do you prefer?",
        options: ["Action and adventure", "Mystery or sci-fi", "Romantic comedy", "Thriller or drama"]
    }
];

const personalityTypes = {
    adventurous: {
        name: "Adventurous Spirit",
        description: "You love exploring the unknown and thrive on new experiences. You’re always ready for the next big adventure!"
    },
    creative: {
        name: "Creative Thinker",
        description: "You see the world differently and have a unique perspective. You express yourself through art, ideas, and imaginative thinking."
    },
    laidBack: {
        name: "Laid-Back Dreamer",
        description: "You take life at your own pace, enjoying the little things and keeping a calm demeanor. You love a good chill day."
    },
    energetic: {
        name: "Energetic Go-Getter",
        description: "You’re full of energy and enthusiasm. Always on the move, you inspire others with your passion for life."
    }
};

const calculatePersonality = (answers) => {
    const traits = { adventurous: 0, creative: 0, laidBack: 0, energetic: 0 };

    // Mapping answers to traits
    answers.forEach((answer, index) => {
        if (index === 0 && answer === "Exploring a new place") traits.adventurous += 2;
        if (index === 0 && answer === "Reading or creating art") traits.creative += 2;
        if (index === 0 && answer === "Chilling with friends") traits.laidBack += 2;
        if (index === 0 && answer === "Trying something exciting") traits.energetic += 2;

        if (index === 1 && answer === "Eagle, for freedom") traits.adventurous += 2;
        if (index === 1 && answer === "Cat, for creativity") traits.creative += 2;
        if (index === 1 && answer === "Koala, for relaxation") traits.laidBack += 2;
        if (index === 1 && answer === "Tiger, for energy") traits.energetic += 2;

        if (index === 2 && answer === "Backpacking through nature") traits.adventurous += 2;
        if (index === 2 && answer === "Exploring museums") traits.creative += 2;
        if (index === 2 && answer === "Lounging on the beach") traits.laidBack += 2;
        if (index === 2 && answer === "Adventure sports") traits.energetic += 2;

        if (index === 3 && answer === "Hiking") traits.adventurous += 2;
        if (index === 3 && answer === "Drawing") traits.creative += 2;
        if (index === 3 && answer === "Watching movies") traits.laidBack += 2;
        if (index === 3 && answer === "Dancing") traits.energetic += 2;

        if (index === 4 && answer === "Curiosity") traits.adventurous += 2;
        if (index === 4 && answer === "Creativity") traits.creative += 2;
        if (index === 4 && answer === "Calmness") traits.laidBack += 2;
        if (index === 4 && answer === "Enthusiasm") traits.energetic += 2;

        if (index === 5 && answer === "With courage") traits.adventurous += 2;
        if (index === 5 && answer === "By thinking it through") traits.creative += 2;
        if (index === 5 && answer === "By staying calm") traits.laidBack += 2;
        if (index === 5 && answer === "By facing it head-on") traits.energetic += 2;

        if (index === 6 && answer === "Adventure story") traits.adventurous += 2;
        if (index === 6 && answer === "Fantasy novel") traits.creative += 2;
        if (index === 6 && answer === "Self-help guide") traits.laidBack += 2;
        if (index === 6 && answer === "Motivational biography") traits.energetic += 2;

        if (index === 7 && answer === "Something exotic") traits.adventurous += 2;
        if (index === 7 && answer === "Homemade soup") traits.creative += 2;
        if (index === 7 && answer === "Pizza") traits.laidBack += 2;
        if (index === 7 && answer === "Spicy food") traits.energetic += 2;

        if (index === 8 && answer === "Reading or learning something new") traits.creative += 2;
        if (index === 8 && answer === "Doing a creative project") traits.creative += 2;
        if (index === 8 && answer === "Relaxing with a good movie") traits.laidBack += 2;
        if (index === 8 && answer === "Finding something active indoors") traits.energetic += 2;

        if (index === 9 && answer === "Action and adventure") traits.adventurous += 2;
        if (index === 9 && answer === "Mystery or sci-fi") traits.creative += 2;
        if (index === 9 && answer === "Romantic comedy") traits.laidBack += 2;
        if (index === 9 && answer === "Thriller or drama") traits.energetic += 2;
    });

    return Object.keys(traits).reduce((a, b) => (traits[a] > traits[b] ? a : b));
};




const FunPersonalityQuiz = () => {
    const [answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [personalityResult, setPersonalityResult] = useState(null);

    const handleAnswer = (answer) => {
        const newAnswers = [...answers, answer];
        setAnswers(newAnswers);

        if (currentQuestionIndex === questions.length - 1) {
            setQuizCompleted(true);
            const result = calculatePersonality(newAnswers);
            setPersonalityResult(personalityTypes[result]);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const restartQuiz = () => {
        setAnswers([]);
        setCurrentQuestionIndex(0);
        setQuizCompleted(false);
        setPersonalityResult(null);
    };

    if (quizCompleted && personalityResult) {
        return (
            <div className="quiz-background min-h-screen flex items-center justify-center text-white p-4">
                <div className="w-full max-w-2xl text-center space-y-6 animate-fade-in">
                    <h2 className="text-4xl font-bold">{personalityResult.name}</h2>
                    <p className="text-lg italic">{personalityResult.description}</p>
                    <button
                        onClick={restartQuiz}
                        className="mt-6 bg-pink-500 text-white font-semibold py-3 px-6 rounded-full transition duration-300 hover:bg-pink-400 transform hover:scale-105"
                    >
                        Restart Quiz
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz-background min-h-screen text-white p-4 flex flex-col items-center">
            <div className="max-w-2xl w-full text-center space-y-4">
                <div className="progress-bar mb-6">
                    <div
                        className="progress-bar-inner"
                        style={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
                    ></div>
                </div>

                <div className="question-card animate-fade-in">
                    <h3 className="text-2xl mb-4 font-semibold">{currentQuestion.question}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className="option-button"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FunPersonalityQuiz;


