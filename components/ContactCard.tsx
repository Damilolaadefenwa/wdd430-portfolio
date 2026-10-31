interface ContactCardProps {
  email: string;
  phone?: string;
  linkedin?: string;
}

export default function ContactCard({ email, phone, linkedin }: ContactCardProps) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center h-full">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Contact Information</h3>
            <p className="text-gray-600 mb-6 grow">Feel free to reach out to me through the following channels:</p>
            
            <div className="flex flex-col gap-3 mt-auto w-full">
                <a href={`mailto:${email}`} className="bg-blue-50 text-blue-700 py-2 px-4 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                    Email: {email}
                </a>
                
                {phone && (
                    <p className="bg-gray-50 text-gray-700 py-2 px-4 rounded-lg font-medium border border-gray-100">
                        Phone: {phone}
                    </p>
                )}
                
                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-700 py-2 px-4 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                        LinkedIn Profile
                    </a>
                )}
            </div>
        </div>
    );
}