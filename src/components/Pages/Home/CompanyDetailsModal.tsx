import React, { useState } from "react";
import Modal from "../../common/Modal";
import Image from "next/image";
import classNames from "classnames";

interface CompanyDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initiative: {
    id: string;
    company: string;
    initiative: string;
    challenge?: string;
    description: string;
    callToAction?: string[];
    links?: string[];
    logo: string;
  };
}

const CompanyDetailsModal: React.FC<CompanyDetailsModalProps> = ({
  isOpen,
  onClose,
  initiative,
}) => {
  const [activeTab, setActiveTab] = useState<"rewards" | "missions">("rewards");

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-h-[90vh]">
      <div className="p-6 text-white overflow-y-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <Image
              src={initiative.logo}
              alt={initiative.company}
              width={150}
              height={150}
              className="object-contain "
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              🚀 {initiative.initiative}
            </h2>
            <h3 className="text-xl sm:text-2xl mb-2">
              🌟 {initiative.company}
            </h3>
            {initiative.challenge && (
              <p className="italic mb-2 text-lg">
                ⚠️ {initiative.challenge}
              </p>
            )}
            <p className="mb-4 text-base sm:text-lg leading-relaxed">
              {initiative.description}
            </p>
            {initiative.callToAction && (
              <ul className="mb-4 list-disc list-inside space-y-1">
                {initiative.callToAction.map((cta, index) => (
                  <li key={index} className="text-sm sm:text-base">
                    💡 {cta}
                  </li>
                ))}
              </ul>
            )}
            {initiative.links && (
              <div className="flex flex-col gap-2">
                {initiative.links.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm sm:text-base"
                  >
                    🔗 {link}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Tabs for Rewards and Missions */}
        <div className="mt-6 border-t border-gray-700 pt-4">
          <div className="flex justify-around mb-4">
            <button
              onClick={() => setActiveTab("rewards")}
              className={classNames("px-4 py-2 font-medium rounded", {
                "border-b-2 border-blue-500 text-white":
                  activeTab === "rewards",
                "text-gray-400": activeTab !== "rewards",
              })}
            >
              ⭐ Rewards
            </button>
            <button
              onClick={() => setActiveTab("missions")}
              className={classNames("px-4 py-2 font-medium rounded", {
                "border-b-2 border-blue-500 text-white":
                  activeTab === "missions",
                "text-gray-400": activeTab !== "missions",
              })}
            >
              🏆 Missions
            </button>
          </div>
          <div className="mt-4 text-center">
            {activeTab === "rewards" ? (
              <div className="py-4">
                <p className="text-lg">Rewards coming soon! 🎁</p>
              </div>
            ) : (
              <div className="py-4">
                <p className="text-lg">Missions coming soon! 🚀</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CompanyDetailsModal;
