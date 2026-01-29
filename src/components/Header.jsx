import React, { useState, useRef, useEffect } from 'react';
import {
    Search,
    Languages,
    Bell,
    ChevronDown,
    Settings,
    User,
    LogOut,
    X,
    Check,
    Clock,
    AlertCircle,
    MessageSquare,
    UserPlus,
    Moon,
    Sun,
} from 'lucide-react';

const Header = ({
    userName = 'Harshit',
    userInitial = 'H',
    notificationCount = 3,
}) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [isMobile, setIsMobile] = useState(false);
    const [theme, setTheme] = useState('light');

    const profileRef = useRef(null);
    const searchRef = useRef(null);
    const languageRef = useRef(null);
    const notificationRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            setTheme('dark');
        } else {
            document.body.classList.remove('dark');
            setTheme('light');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'dark') {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target))
                setIsProfileOpen(false);
            if (searchRef.current && !searchRef.current.contains(e.target))
                setIsSearchOpen(false);
            if (languageRef.current && !languageRef.current.contains(e.target))
                setIsLanguageOpen(false);
            if (notificationRef.current && !notificationRef.current.contains(e.target))
                setIsNotificationOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log('Search:', searchQuery);
            setSearchQuery('');
            setIsSearchOpen(false);
        }
    };

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    ];

    const notifications = [
        {
            id: 1,
            icon: MessageSquare,
            title: 'New Message',
            description: 'Message from John Doe',
            time: '2 minutes ago',
            unread: true,
        },
        {
            id: 2,
            icon: UserPlus,
            title: 'New User',
            description: 'New user joined',
            time: '1 hour ago',
            unread: true,
        },
        {
            id: 3,
            icon: AlertCircle,
            title: 'System Alert',
            description: 'Maintenance tonight',
            time: '3 hours ago',
            unread: false,
        },
        {
            id: 4,
            icon: Clock,
            title: 'Reminder',
            description: 'Meeting at 3 PM',
            time: '5 hours ago',
            unread: false,
        },
    ];

    const unreadNotifications = notifications.filter((n) => n.unread);

    const profileMenuItems = [
        { icon: User, label: 'Profile', action: () => { } },
        { icon: Settings, label: 'Settings', action: () => { } },
        { icon: LogOut, label: 'Logout', action: () => { } },
    ];

    return (
        <div className="w-full flex justify-between items-center px-2 sm:px-4 md:px-6 h-13 shadow-md border-b border-gray-200">
            <div>
                <img
                  key="logo"
                  src="/logo.png"
                  className="max-h-10 mx-auto"
                />
            </div>
            <div className="flex items-center justify-end px-6 py-2 gap-x-4">
                {/* Search */}
                <div ref={searchRef} className="relative">
                    {/* {!isMobile && (
                        <div
                            className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${isSearchOpen ? 'w-72 opacity-100' : 'w-0 opacity-0 pointer-events-none'
                                }`}
                        >
                            <form
                                onSubmit={handleSearch}
                                className="flex items-center bg-white rounded-full border shadow-lg"
                            >
                                <Search size={16} className="ml-4 text-gray-400" />
                                <input
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search anything..."
                                    className="flex-1 px-3 py-2.5 bg-transparent focus:outline-none"
                                />
                                <button onClick={() => setIsSearchOpen(false)} type="button">
                                    <X size={16} />
                                </button>
                            </form>
                        </div>
                    )} */}
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                        <Search size={20} />
                    </button>
                </div>

                {/* Language */}
                {/* <div ref={languageRef} className="relative">
                    <button onClick={() => setIsLanguageOpen(!isLanguageOpen)}>
                        <Languages size={20} />
                    </button>
                    {isLanguageOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setSelectedLanguage(lang.code);
                                        setIsLanguageOpen(false);
                                    }}
                                    className="w-full px-4 py-2 flex justify-between"
                                >
                                    <span>{lang.flag} {lang.name}</span>
                                    {selectedLanguage === lang.code && <Check size={14} />}
                                </button>
                            ))}
                        </div>
                    )}
                </div> */}

                {/* Notifications */}
                <div ref={notificationRef} className="relative">
                    <button onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
                        <Bell size={20} />
                        {unreadNotifications.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text12 rounded-full size-4 flex items-center justify-center">
                                {unreadNotifications.length}
                            </span>
                        )}
                    </button>

                    {isNotificationOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow">
                            {notifications.map((n) => {
                                const Icon = n.icon;
                                return (
                                    <div key={n.id} className="px-4 py-3 flex gap-3">
                                        <Icon size={14} />
                                        <div>
                                            <p className="font-medium">{n.title}</p>
                                            <p className="text-xs">{n.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Profile */}
                <div ref={profileRef} className="relative">
                    <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            {userInitial}
                        </div>
                        <span>{userName}</span>
                        <ChevronDown size={16} />
                    </button>

                    {isProfileOpen && (
                        <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow">
                            {profileMenuItems.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <button key={i} className="w-full flex items-center gap-3 px-4 py-2">
                                        <Icon size={16} />
                                        {item.label}
                                    </button>
                                );
                            })}
                            <button onClick={toggleTheme} className="w-full flex items-center gap-3 px-4 py-2">
                                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;

