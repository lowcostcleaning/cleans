import { Badge } from "@/components/ui/badge";

interface ModuleCardProps {
  name: string;
  description: string;
  status: "active" | "coming";
  delay?: string;
}

const ModuleCard = ({ name, description, status, delay = "" }: ModuleCardProps) => {
  return (
    <div 
      className={`glass-card rounded-2xl p-8 hover-lift ${delay}`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <Badge 
          variant={status === "active" ? "default" : "secondary"}
          className={`text-xs font-medium ${
            status === "active" 
              ? "bg-status-active/10 text-status-active border-status-active/20" 
              : "bg-muted text-muted-foreground"
          }`}
        >
          {status === "active" ? "Active (beta)" : "Coming soon"}
        </Badge>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ModuleCard;