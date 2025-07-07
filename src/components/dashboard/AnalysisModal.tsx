import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Brain, X } from 'lucide-react';

interface AnalysisModalProps {
  analysis: string;
  onClose: () => void;
}

const AnalysisModal = ({ analysis, onClose }: AnalysisModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-dark-card border-gray-800 max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl gradient-text">
            <Brain className="w-5 h-5 mr-2" />
            AI Trade Analysis
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="bg-dark rounded-lg p-4 border border-gray-700">
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                {analysis}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <Button
            onClick={onClose}
            className="bg-primary hover:bg-primary-dark text-dark font-semibold"
          >
            Close Analysis
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnalysisModal;