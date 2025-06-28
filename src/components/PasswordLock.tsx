
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PasswordLockProps {
  onUnlock: () => void;
}

const PasswordLock: React.FC<PasswordLockProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === '1738') {
      onUnlock();
    } else {
      setError('ACCESS DENIED');
      setIsShaking(true);
      setPassword('');
      setTimeout(() => {
        setError('');
        setIsShaking(false);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="cyber-grid absolute inset-0 opacity-20"></div>
      
      <div className={`relative z-10 bg-gray-900/90 border border-cyber-blue/50 p-8 max-w-md w-full mx-4 ${isShaking ? 'animate-pulse' : ''}`}>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-orbitron font-black text-white mb-2">
            <span className="text-cyber-blue">[</span>SYSTEM ACCESS<span className="text-cyber-blue">]</span>
          </h1>
          <div className="w-24 h-px bg-cyber-blue mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm terminal-prompt">
            Authentication Required
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-cyber-blue text-sm uppercase tracking-wider mb-2">
              Security Code
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black/50 border-cyber-blue/30 text-white placeholder-gray-500 focus:border-cyber-blue"
              placeholder="Enter access code..."
              autoFocus
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center font-mono bg-red-900/20 border border-red-400/30 p-2">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-transparent border border-cyber-blue text-cyber-blue font-orbitron font-bold uppercase tracking-wider transition-all duration-200 hover:bg-cyber-blue hover:text-white hover:shadow-[0_0_15px_rgba(0,101,175,0.3)]"
          >
            Initialize Access
          </Button>
        </form>

        <div className="mt-8 text-center">
          <div className="bg-black/50 border border-cyber-blue/20 p-3 font-mono text-xs">
            <div className="text-cyber-blue mb-1">$ system.status</div>
            <div className="text-gray-400">awaiting_credentials...</div>
            <div className="text-cyber-blue animate-pulse">_</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordLock;
