interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <div>Лейаут личного кабинета</div>
      {children}
    </>
  );
};

export default DashboardLayout;
