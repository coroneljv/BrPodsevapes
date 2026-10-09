import { spawn } from 'node:child_process';

let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { input += chunk; });
process.stdin.on('end', () => {
  input = input.replace(/^\uFEFF/, '');
  const child = spawn(process.execPath, [
    'C:\\Users\\gorfa\\.codex\\plugins\\cache\\openai-curated-remote\\sites\\1.0.0\\scripts\\site-workflow.mjs',
    '--project-id',
    'appgprj_6ac8fd97987881918491ac9d2ccf9022'
  ], { stdio: ['pipe', 'inherit', 'inherit'] });
  child.stdin.end(input);
  child.on('exit', code => process.exitCode = code ?? 1);
});
