interface SidebarButtonProps {
    icon: React.ReactNode;
    buttonKey: string;
    isActive: boolean;
    onHoverKey: string | null;
    setOnHoverKey: (key: string | null) => void;
    onClick: (key: string) => void;
}


export default SidebarButtonProps;