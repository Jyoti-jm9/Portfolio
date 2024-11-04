import React, { useState } from 'react';
import Progress from '../Items/Progress';

const Skill = () => {
    const frontend = [{ "skill": "HTML5", "percent": "80%" }, { "skill": "CSS3", "percent": "90%" }, { "skill": "JavaScript", "percent": "75%" }, { "skill": "ReactJS", "percent": "90%" }];
    const language = [{ "skill": "C", "percent": "60%" }, { "skill": "Java", "percent": "80%" }, { "skill": "SQL", "percent": "75%" }];
    const tools = [{ "skill": "GIT & Github", "percent": "75%" }, { "skill": "Visual Studio Code", "percent": "85%" }, { "skill": "Webpack", "percent": "60%" }, { "skill": "Responsive Design", "percent": "80%" }];
    const softSkills = [{ "skill": "Problem Solving", "percent": "80%" }, { "skill": "Spoken English", "percent": "90%" }, { "skill": "Attention to Details", "percent": "85%" }];

    const [name, setName] = useState('Frontend');
    const [arr, setArr] = useState(frontend);
    const [active, setActive] = useState([1, 0, 0, 0]);

    const handleFrontend = () => {
        setName("Frontend");
        setArr(frontend);
        setActive([1, 0, 0, 0]);
    };

    const handleBackend = () => {
        setName("Language");
        setArr(language);
        setActive([0, 1, 0, 0]);
    };

    const handleTools = () => {
        setName("Tools");
        setArr(tools);
        setActive([0, 0, 1, 0]);
    };

    const handleSoftSkills = () => {
        setName("Soft Skills");
        setArr(softSkills);
        setActive([0, 0, 0, 1]);
    };

    return (
        <div className='container mx-auto mt-10' id='Skills'>
            <h2 className='text-4xl font-bold mb-8 text-center'>Technical Proficiency</h2>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Skill Selection Section */}
                <div className='lg:w-1/2 flex justify-center'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div
                            className={`p-4 text-center cursor-pointer rounded-md border-2 border-yellow-500 ${active[0] === 1 ? 'bg-indigo-900 text-white shadow-xl shadow-orange-400' : 'text-white shadow-xl shadow-orange-400'}`}
                            onClick={handleFrontend}
                        >
                            Frontend
                        </div>
                        <div
                            className={`p-4 text-center cursor-pointer rounded-md border-2 border-yellow-500 ${active[1] === 1 ? 'bg-indigo-900 text-white shadow-2xl shadow-orange-400' : 'text-white shadow-2xl shadow-orange-400'}`}
                            onClick={handleBackend}
                        >
                            Language
                        </div>
                        <div
                            className={`p-4 text-center cursor-pointer rounded-md border-2 border-yellow-500 ${active[2] === 1 ? 'bg-indigo-900 text-white shadow-xl shadow-orange-400' : 'text-white shadow-xl shadow-orange-400'}`}
                            onClick={handleTools}
                        >
                            Tools
                        </div>
                        <div
                            className={`p-4 text-center cursor-pointer rounded-md border-2 border-yellow-500 ${active[3] === 1 ? 'bg-indigo-900 text-white shadow-2xl shadow-orange-400' : 'text-white shadow-2xl shadow-orange-400'}`}
                            onClick={handleSoftSkills}
                        >
                            Soft Skills
                        </div>
                    </div>
                </div>

                {/* Progress Bar Section */}
                <div className='lg:w-1/2'>
                    <Progress name={name} arr={arr} />
                </div>
            </div>
        </div>
    );
};

export default Skill;
