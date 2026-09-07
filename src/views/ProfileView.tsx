import { ChevronRight, FileText, HelpCircle, LogOut, Package, PiggyBank, ShieldCheck, User, Users } from 'lucide-react';

export default function ProfileView() {
  const profileActions = [
    {
      id: 'profile-details',
      icon: User,
      bgColor: '#F0EBF9',
      iconColor: '#712CDC',
      title: 'Profile details',
      subtitle: 'Name, contact and KYC info',
    },
    {
      id: 'purchases',
      icon: Package,
      bgColor: '#F0EBF9',
      iconColor: '#712CDC',
      title: 'Purchases',
      subtitle: 'Orders, invoices and loan status',
    },
    {
      id: 'pledge-history',
      icon: PiggyBank,
      bgColor: '#F0EBF9',
      iconColor: '#712CDC',
      title: 'Pledge history',
      subtitle: 'Funds you pledged or released',
    },
    {
      id: 'invite-friends',
      icon: Users,
      bgColor: '#F0EBF9',
      iconColor: '#712CDC',
      title: 'Invite friends',
      subtitle: 'Share the app, earn rewards',
      badge: 'EARN ₹500',
    },
    {
      id: 'support-faqs',
      icon: HelpCircle,
      bgColor: '#F0EBF9',
      iconColor: '#712CDC',
      title: 'Support & FAQs',
      subtitle: 'Find answers or contact us',
    },
    {
      id: 'privacy-policy',
      icon: ShieldCheck,
      bgColor: '#F0EBF9',
      iconColor: '#712CDC',
      title: 'Privacy policy',
      subtitle: 'How we handle your data',
    },
    {
      id: 'terms-conditions',
      icon: FileText,
      bgColor: '#F0EBF9',
      iconColor: '#712CDC',
      title: 'Terms & conditions',
      subtitle: 'Rules governing your use',
    },
  ];

  return (
    <div style={{ width: '100%', padding: '24px 16px 100px 16px' }}>
      {/* Title */}
      <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#171725', marginBottom: '4px' }}>
        Profile
      </h1>
      <p style={{ fontSize: '13px', color: '#6E6E82', marginBottom: '24px' }}>
        Manage your account settings and personal preferences.
      </p>

      {/* User Info Header Card */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginBottom: '28px',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#F0EBF9',
            color: '#712CDC',
            fontWeight: 800,
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          U
        </div>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#171725' }}>User</h2>
          <p style={{ fontSize: '13px', color: '#6E6E82' }}>+91 9956356747</p>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <span
        style={{
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '0.8px',
          color: '#8A8A9E',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '12px',
        }}
      >
        QUICK ACTIONS
      </span>

      {/* Actions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {profileActions.map((action) => {
          const IconComp = action.icon;
          return (
            <div
              key={action.id}
              onClick={() => alert(`Clicked on ${action.title}`)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '14px 16px',
                border: '1px solid #F0F0F4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: action.bgColor,
                    color: action.iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconComp size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#171725' }}>
                    {action.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#6E6E82', marginTop: '1px' }}>
                    {action.subtitle}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {action.badge && (
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      color: '#712CDC',
                      backgroundColor: '#F0EBF9',
                      padding: '3px 8px',
                      borderRadius: '9999px',
                    }}
                  >
                    {action.badge}
                  </span>
                )}
                <ChevronRight size={18} color="#A0A0B0" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Log out Button */}
      <button
        onClick={() => alert('Logged out successfully.')}
        style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #F3E8FF',
          color: '#DC2626',
          borderRadius: '16px',
          padding: '14px',
          fontWeight: 700,
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          cursor: 'pointer',
        }}
      >
        <LogOut size={16} />
        <span>Log out</span>
      </button>
    </div>
  );
}
