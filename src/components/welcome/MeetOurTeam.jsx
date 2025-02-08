import React from 'react';
import madhav from '../../assets/madhav.jpg';
import soham from '../../assets/soham.jpg';
import shatadru from '../../assets/shatadru.jpg';
import anshul from '../../assets/anshul.jpg';

const teamMembers = [
    {
        id: 1,
        name: 'Madhav Juneja',
        position: 'Team Lead',
        image: madhav,
    },
    {
        id: 2,
        name: 'Soham Patra',
        position: 'ML Lead',
        image: soham,
    },
    {
        id: 3,
        name: 'Anshul Panigrahi',
        position: 'Designer',
        image: anshul,
    },
    {
        id: 4,
        name: 'Lakshya Gupta',
        position: 'Front-end Developer',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 5,
        name: 'Shatadru Dada',
        position: 'Back-end Developer',
        image: shatadru,
    }
];

const MeetOurTeam = () => {
    return (
        <div id="team" className="px-6 py-16 bg-black/90">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] font-heading text-center mb-20">
                Meet Our Team
            </h2>
            <div className="max-w-5xl mx-auto flex flex-col gap-12">
                {teamMembers.map((member, index) => (
                    <div 
                        key={member.id} 
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                            />
                        </div>

                        {/* Description Box */}
                        <div className="flex flex-col bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg w-full md:w-2/3">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] font-heading">{member.name}</h3>
                            <p className="text-lg text-gray-400 mt-2 font-body">{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetOurTeam;
