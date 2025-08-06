import { useState } from "react";

const Find = () => {
  // Sample data for dropdowns
  const brands = ["Toyota", "Honda", "Ford", "BMW", "Mercedes"];
  const models = {
    Toyota: ["Camry", "Corolla", "RAV4", "Highlander"],
    Honda: ["Civic", "Accord", "CR-V", "Pilot"],
    Ford: ["F-150", "Mustang", "Explorer", "Focus"],
    BMW: ["3 Series", "5 Series", "X3", "X5"],
    Mercedes: ["C-Class", "E-Class", "S-Class", "GLC"],
  };
  const subModels = {
    "Toyota-Camry": ["LE", "SE", "XLE", "XSE"],
    "Toyota-Corolla": ["L", "LE", "XLE"],
    "Toyota-RAV4": ["LE", "XLE", "Adventure"],
    "Toyota-Highlander": ["LE", "XLE", "Limited"],
    "Honda-Civic": ["LX", "EX", "Touring"],
    "Honda-Accord": ["LX", "Sport", "Touring"],
    "Honda-CR-V": ["EX", "EX-L", "Touring"],
    "Honda-Pilot": ["LX", "EX-L", "Elite"],
    "Ford-F-150": ["XL", "XLT", "Lariat"],
    "Ford-Mustang": ["EcoBoost", "GT", "Mach 1"],
    "Ford-Explorer": ["Base", "XLT", "Limited"],
    "Ford-Focus": ["S", "SE", "SEL"],
    "BMW-3 Series": ["320i", "330i", "M3"],
    "BMW-5 Series": ["530i", "540i", "M5"],
    "BMW-X3": ["sDrive30i", "xDrive30i", "M"],
    "BMW-X5": ["xDrive40i", "xDrive50i", "M"],
    "Mercedes-C-Class": ["C300", "C43 AMG", "C63 AMG"],
    "Mercedes-E-Class": ["E350", "E450", "AMG E53"],
    "Mercedes-S-Class": ["S500", "S580", "AMG S63"],
    "Mercedes-GLC": ["GLC300", "GLC43 AMG", "GLC63 AMG"],
  };

  // State for dropdown selections
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedSubModel, setSelectedSubModel] = useState("");

  // Handle brand change
  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel(""); // Reset model when brand changes
    setSelectedSubModel(""); // Reset sub-model when brand changes
  };

  // Handle model change
  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
    setSelectedSubModel(""); // Reset sub-model when model changes
  };

  return (
    <div className="py-6 px-4 sm:px-6 md:px-8 lg:py-10">
      <div className="max-w-[1200px] mx-auto p-4 sm:p-6 border border-[#492F92] bg-white rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          {/* Left Section */}
          <div className="flex-1 w-full space-y-4">
            <div>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded text-gray-600 bg-white focus:outline-none focus:border-[#492F92] text-sm sm:text-base"
                value={selectedBrand}
                onChange={handleBrandChange}
              >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded text-gray-600 bg-white focus:outline-none focus:border-[#492F92] text-sm sm:text-base"
                value={selectedModel}
                onChange={handleModelChange}
                disabled={!selectedBrand}
              >
                <option value="">Select Model</option>
                {selectedBrand &&
                  models[selectedBrand]?.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded text-gray-600 bg-white focus:outline-none focus:border-[#492F92] text-sm sm:text-base"
                value={selectedSubModel}
                onChange={(e) => setSelectedSubModel(e.target.value)}
                disabled={!selectedModel}
              >
                <option value="">Select Sub Model</option>
                {selectedBrand &&
                  selectedModel &&
                  subModels[`${selectedBrand}-${selectedModel}`]?.map(
                    (subModel) => (
                      <option key={subModel} value={subModel}>
                        {subModel}
                      </option>
                    )
                  )}
              </select>
            </div>

            <button className="w-full bg-[#492F92] hover:bg-[#492F92]/80 text-white py-3 px-6 rounded font-medium transition-colors text-sm sm:text-base">
              Find My Part
            </button>
          </div>

          {/* OR Divider */}
          <div className="flex items-center justify-center w-full sm:w-auto">
            <div className="w-12 h-12 bg-[#492F92] rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">OR</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 w-full space-y-4">
            <div>
              <input
                type="text"
                placeholder="Search with Part Number"
                className="w-full px-4 py-3 border border-gray-300 rounded text-gray-600 placeholder-gray-400 bg-white focus:outline-none focus:border-[#492F92] text-sm sm:text-base"
              />
            </div>

            <button className="w-full bg-[#492F92] hover:bg-[#492F92]/80 text-white py-3 px-6 rounded font-medium transition-colors text-sm sm:text-base">
              Find My Part
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
