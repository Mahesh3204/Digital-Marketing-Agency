import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import {
  LayoutDashboard, Users, TrendingUp, Mail, DollarSign, Bell, Search, Menu
} from 'lucide-react';

const areaData = [
  { name: 'Jan', revenue: 4000, traffic: 2400 },
  { name: 'Feb', revenue: 3000, traffic: 1398 },
  { name: 'Mar', revenue: 2000, traffic: 9800 },
  { name: 'Apr', revenue: 2780, traffic: 3908 },
  { name: 'May', revenue: 1890, traffic: 4800 },
  { name: 'Jun', revenue: 2390, traffic: 3800 },
  { name: 'Jul', revenue: 3490, traffic: 4300 },
];

const pieData = [
  { name: 'Organic', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Direct', value: 300 },
  { name: 'Referral', value: 200 },
];
const COLORS = ['#4F46E5', '#06B6D4', '#7C3AED', '#10B981'];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-heading font-bold text-dark mb-6"
          >
            Full Visibility into <span className="text-gradient">Every Metric.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Stop guessing. Our custom analytics dashboards give you real-time insights into exactly how your marketing dollars are performing.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row h-[700px]"
        >
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <span className="font-heading font-bold text-xl flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center text-xs">G</div>
                Analytics
              </span>
              <Menu size={20} className="text-gray-500 md:hidden" />
            </div>
            <div className="p-4 flex-1 hidden md:block space-y-1">
              {['Overview', 'Campaigns', 'SEO', 'Traffic', 'Social', 'Revenue'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === item ? 'bg-primary shadow-sm text-white font-medium' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {item === 'Overview' && <LayoutDashboard size={18} />}
                  {item === 'Campaigns' && <TrendingUp size={18} />}
                  {item === 'SEO' && <Search size={18} />}
                  {item === 'Traffic' && <Users size={18} />}
                  {item === 'Social' && <Mail size={18} />}
                  {item === 'Revenue' && <DollarSign size={18} />}
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="flex-1 bg-white flex flex-col overflow-hidden">
            {/* Topbar */}
            <div className="h-20 border-b border-gray-100 flex items-center justify-between px-8">
              <h3 className="text-2xl font-heading font-bold">{activeTab}</h3>
              <div className="flex items-center gap-6">
                <div className="relative hidden sm:block">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Search metrics..." className="pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none text-sm focus:ring-2 focus:ring-primary/20 outline-none w-64" />
                </div>
                <button className="relative text-gray-400 hover:text-dark">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
                </button>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex-1 overflow-y-auto bg-gray-50/50">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Total Revenue", value: "$24,563.00", trend: "+14.5%", up: true },
                  { label: "Active Users", value: "45,231", trend: "+22.4%", up: true },
                  { label: "Conversion Rate", value: "4.6%", trend: "-1.2%", up: false },
                  { label: "Cost Per Lead", value: "$24.50", trend: "-8.4%", up: true }, // Lower is better
                ].map((kpi, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 text-sm mb-2">{kpi.label}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold text-dark">{kpi.value}</p>
                      <span className={`text-sm font-medium ${kpi.up ? 'text-success' : 'text-rose-500'}`}>
                        {kpi.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Area */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Area Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-dark">Revenue vs Traffic</h4>
                    <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1 outline-none">
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                      <option>This Year</option>
                    </select>
                  </div>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={areaData}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dx={-10} />
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                        <RechartsTooltip
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                        />
                        <Area type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                        <Area type="monotone" dataKey="traffic" stroke="#06B6D4" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
                  <h4 className="font-bold text-dark mb-6">Traffic Sources</h4>
                  <div className="flex-1 min-h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {pieData.map((entry, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                        <span className="text-xs text-gray-500">{entry.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
