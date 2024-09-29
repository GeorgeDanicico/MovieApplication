

import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
}) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleConfirm = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            onConfirm();
        }, 300);
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center h-[200px] z-50 ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } transition-opacity duration-300 h-screen w-screen`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
            <div className="bg-white rounded-lg shadow-lg p-6" style={{ width: '500px' }}>
                <h2 className="text-xl font-bold mb-4">Confirmare</h2>
                <p className="mb-4">Esti sigur ca vrei sa continui??</p>
                <div className="flex justify-end">
                    <Button
                        className="mr-2 bg-gray-500 rounded"
                        onClick={onClose}
                    >
                        Anuleaza
                    </Button>
                    <Button
                        className={`px-4 py-2 bg-linear-gradient text-white rounded ${
                            isAnimating ? 'opacity-0 pointer-events-none' : ''
                        }`}
                        onClick={handleConfirm}
                    >
                        Confirma
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;