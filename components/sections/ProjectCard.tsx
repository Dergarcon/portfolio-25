import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

interface ProjectMetric {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
}

interface ProjectCardProps {
  title: string;
  description: string;
  businessImpact: string;
  metrics: ProjectMetric[];
  technologies: string[];
  liveDemo?: string;
  githubUrl?: string;
  detailsUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  businessImpact,
  metrics,
  technologies,
  liveDemo,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`h-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${featured ? 'border-primary/50 bg-primary/5' : ''}`}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <CardDescription className="text-base mb-3">
              {description}
            </CardDescription>
            <div className="text-sm font-medium text-primary mb-4">
              {businessImpact}
            </div>
          </div>
          {featured && (
            <Badge variant="secondary" className="ml-2">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-center gap-1 text-lg font-bold text-primary">
                {metric.value}
                {metric.trend === 'up' && <TrendingUp className="h-4 w-4" />}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-medium mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4">
          {liveDemo && (
            <Button variant="default" size="sm" asChild className="flex-1">
              <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
