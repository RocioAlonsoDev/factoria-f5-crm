import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function GenderCardDashboardAtom({
    statTitle,
    statDescription,
    statArrow,
    statPercent,
    statPercentColor,
    statDescripiron,
    statIconColor,
    statIconImage,
}) {
    return (
        <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-orange-500 uppercase font-bold text-m pb-4">
                                {statTitle}
                            </h5>
                            <span className="text-blueGray-400 uppercase font-bold text-m pb-4">
                                Total mujeres: {statDescription}
                            </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div
                                className={
                                    "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                                    statIconColor
                                }
                            >
                                {statIconImage}
                            </div>
                        </div>
                    </div>

                    <p className="text-2xl font-semibold  text-teal-400 mt-4">
                        <span className={statPercentColor + " mr-2"}>
                            {statArrow === "up" ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                </svg>
                            ) : statArrow === "down" ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-6.75-6.75M12 19.5l-6.75-6.75" />
                                </svg>
                            ) : null}
                            {statPercent}%
                        </span>
                        <span className="whitespace-nowrap">{statDescripiron}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

GenderCardDashboardAtom.propTypes = {
    statTitle: PropTypes.string,
    statDescription: PropTypes.number,
    statArrow: PropTypes.oneOf(["up", "down"]),
    statPercent: PropTypes.string,
    statPercentColor: PropTypes.string,
    statDescripiron: PropTypes.string,
    statIconColor: PropTypes.string,
    statIconImage: PropTypes.any,
};
  
  