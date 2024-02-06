import Layout from "@/components/layout/layout";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaCalendar, FaClock, FaCheckCircle, FaCross } from 'react-icons/fa';
import Image from 'next/image';
import IMAGES from "@/constants/images";
import { ImCross } from "react-icons/im";

const Staff = () => {
    const staffMembers = [
        {
            id: 1,
            name: 'John Doe',
            role: 'Founder',
            email: 'john@example.com',
            phone: '123-456-7890',
            restaurant: 'XYZ Restaurant',
            // startDate: '2022-01-01',
            workingHours: '9 AM - 5 PM',
            daysOff: ['Saturday', 'Sunday'],
            isActive: true,
        },
        {
            id: 1,
            name: 'John Doe',
            role: 'Co-Founder',
            email: 'john@example.com',
            phone: '123-456-7890',
            restaurant: 'XYZ Restaurant',
            startDate: '2022-01-01',
            workingHours: '9 AM - 5 PM',
            daysOff: ['Saturday', 'Sunday'],
            isActive: false,
        },
        {
            id: 1,
            name: 'John Doe',
            role: 'Chef',
            email: 'john@example.com',
            phone: '123-456-7890',
            restaurant: 'XYZ Restaurant',
            startDate: '2022-01-01',
            workingHours: '9 AM - 5 PM',
            daysOff: ['Saturday', 'Sunday'],
            isActive: true,
        },
    ];
    return <Layout>
        <div className="mx-4 mt-10">
            <h1 className="text-4xl font-bold mb-6">Staff Members</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {staffMembers.map((staff) => (
                    <div key={staff.id} className="bg-slate-100 p-4 rounded-md shadow-md">
                        <div className="flex items-center mb-4 justify-between">
                            <Image
                                src={IMAGES.NO_IMAGE}
                                alt=""
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div className="text-green-500 flex gap-2 items-center">
                                {staff.isActive ? "Active" : "Not Active"}
                                {staff.isActive ? <FaCheckCircle /> : <ImCross />}
                            </div>
                        </div>
                        <h2 className="text-lg font-bold">{staff.name}</h2>
                        <p className="text-gray-500">{staff.role}</p>
                        <div className="flex items-center mt-2">
                            <FaEnvelope className="mr-2" />
                            <p>{staff.email}</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <FaPhone className="mr-2" />
                            <p>{staff.phone}</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <FaBuilding className="mr-2" />
                            <p>{staff.restaurant}</p>
                        </div>
                        {staff.startDate && <div className="flex items-center mt-2">
                            <FaCalendar className="mr-2" />
                            <p>{staff.startDate}</p>
                        </div>}

                        <div className="flex items-center mt-2">
                            <FaClock className="mr-2" />
                            <p>{staff.workingHours}</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <FaCalendar className="mr-2" />
                            <p>Days Off: {staff.daysOff.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Layout>;
};

export default Staff;
