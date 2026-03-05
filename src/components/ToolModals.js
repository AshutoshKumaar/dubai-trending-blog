"use client";

import { useMemo, useState } from "react";

const toolNames = [
  "Emirates ID Renewal Checklist",
  "UAE Job Application Planner",
  "Dubai Cost Calculator",
  "Visa Document Organizer",
  "Labour Complaint Steps",
  "Nol Card Budget Tracker",
];

const defaultChecklist = [
  { label: "Passport copy", checked: false },
  { label: "Current Emirates ID", checked: false },
  { label: "Residence visa copy", checked: false },
  { label: "Recent passport photo", checked: false },
  { label: "Medical insurance proof", checked: false },
];

const defaultVisaDocs = [
  { label: "Offer letter", done: false },
  { label: "Attested education documents", done: false },
  { label: "Medical test record", done: false },
  { label: "Emirates ID application", done: false },
];

export default function ToolModals({ tools = toolNames, className = "mt-6 grid gap-3 sm:grid-cols-2" }) {
  const [activeTool, setActiveTool] = useState("");
  const [checklist, setChecklist] = useState(defaultChecklist);
  const [visaDocs, setVisaDocs] = useState(defaultVisaDocs);
  const [appsPerDay, setAppsPerDay] = useState(4);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [rent, setRent] = useState(3200);
  const [food, setFood] = useState(900);
  const [transport, setTransport] = useState(450);
  const [misc, setMisc] = useState(700);

  const monthlyTotal = useMemo(
    () => Number(rent) + Number(food) + Number(transport) + Number(misc),
    [rent, food, transport, misc]
  );

  const visaProgress = useMemo(() => {
    const completed = visaDocs.filter((item) => item.done).length;
    return Math.round((completed / visaDocs.length) * 100);
  }, [visaDocs]);

  const applicationsPerMonth = useMemo(
    () => Number(appsPerDay) * Number(daysPerWeek) * 4,
    [appsPerDay, daysPerWeek]
  );

  function toggleChecklist(index) {
    setChecklist((prev) =>
      prev.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
    );
  }

  function toggleVisaDoc(index) {
    setVisaDocs((prev) =>
      prev.map((item, i) => (i === index ? { ...item, done: !item.done } : item))
    );
  }

  return (
    <>
      <div className={className}>
        {tools.map((tool) => (
          <button
            key={tool}
            type="button"
            onClick={() => setActiveTool(tool)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-sm"
          >
            {tool}
          </button>
        ))}
      </div>

      {activeTool ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4 py-10">
          <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-xl font-black text-slate-900">{activeTool}</h3>
              <button
                type="button"
                onClick={() => setActiveTool("")}
                className="rounded-lg border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Close
              </button>
            </div>

            {activeTool === "Emirates ID Renewal Checklist" ? (
              <div className="space-y-3">
                <p className="text-sm text-slate-700">
                  Mark documents to track your renewal readiness.
                </p>
                {checklist.map((item, index) => (
                  <label
                    key={item.label}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  >
                    <span>{item.label}</span>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleChecklist(index)}
                      className="h-4 w-4"
                    />
                  </label>
                ))}
              </div>
            ) : null}

            {activeTool === "UAE Job Application Planner" ? (
              <div className="space-y-4">
                <p className="text-sm text-slate-700">
                  Set your target pace and estimate monthly applications.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Applications per day
                    <input
                      type="number"
                      min="1"
                      value={appsPerDay}
                      onChange={(e) => setAppsPerDay(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                    />
                  </label>
                  <label className="text-sm font-semibold text-slate-700">
                    Days per week
                    <input
                      type="number"
                      min="1"
                      max="7"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                    />
                  </label>
                </div>
                <p className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700">
                  Estimated monthly applications: {applicationsPerMonth}
                </p>
              </div>
            ) : null}

            {activeTool === "Dubai Cost Calculator" ? (
              <div className="space-y-4">
                <p className="text-sm text-slate-700">
                  Enter your expected expenses to estimate monthly budget.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Rent", value: rent, setter: setRent },
                    { label: "Food", value: food, setter: setFood },
                    { label: "Transport", value: transport, setter: setTransport },
                    { label: "Misc", value: misc, setter: setMisc },
                  ].map((item) => (
                    <label key={item.label} className="text-sm font-semibold text-slate-700">
                      {item.label}
                      <input
                        type="number"
                        min="0"
                        value={item.value}
                        onChange={(e) => item.setter(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                      />
                    </label>
                  ))}
                </div>
                <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700">
                  Total monthly estimate: AED {monthlyTotal.toLocaleString()}
                </p>
              </div>
            ) : null}

            {activeTool === "Visa Document Organizer" ? (
              <div className="space-y-4">
                <p className="text-sm text-slate-700">
                  Track visa documentation status with a simple progress view.
                </p>
                {visaDocs.map((item, index) => (
                  <label
                    key={item.label}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  >
                    <span>{item.label}</span>
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() => toggleVisaDoc(index)}
                      className="h-4 w-4"
                    />
                  </label>
                ))}
                <div>
                  <div className="mb-1 flex justify-between text-xs text-slate-600">
                    <span>Progress</span>
                    <span>{visaProgress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-blue-600 transition-all"
                      style={{ width: `${visaProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            ) : null}

            {activeTool === "Labour Complaint Steps" ? (
              <div className="space-y-3 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">
                  Follow this sequence to raise a labour complaint:
                </p>
                <ol className="space-y-2">
                  <li>1. Collect contract, salary slips, and communication proof.</li>
                  <li>2. File complaint through official labour channels.</li>
                  <li>3. Track case number and submit additional documents if requested.</li>
                  <li>4. Attend mediation and keep written records of outcomes.</li>
                </ol>
              </div>
            ) : null}

            {activeTool === "Nol Card Budget Tracker" ? (
              <div className="space-y-4 text-sm text-slate-700">
                <p>Estimate your monthly transport cost based on daily spend.</p>
                <label className="text-sm font-semibold text-slate-700">
                  Daily Nol usage (AED)
                  <input
                    type="number"
                    min="0"
                    value={transport}
                    onChange={(e) => setTransport(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                  />
                </label>
                <p className="rounded-lg bg-indigo-50 px-3 py-2 font-bold text-indigo-700">
                  Estimated monthly Nol budget: AED{" "}
                  {(Number(transport) * 26).toLocaleString()}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
