const fs = require('fs').promises;
const path = require('path');

async function downloadFromGitHub(repoUrl, branch = 'main') {
  try {
    // Extract owner and repo from GitHub URL
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) {
      throw new Error('Invalid GitHub URL format');
    }
    
    const [, owner, repo] = match;
    const cleanRepo = repo.replace('.git', '');
    
    // GitHub API URL for repository contents
    const apiUrl = `https://api.github.com/repos/${owner}/${cleanRepo}/contents`;
    
    console.log(`🔍 Fetching repository structure from: ${owner}/${cleanRepo}`);
    console.log(`📡 API URL: ${apiUrl}`);
    
    // Instructions for manual import
    console.log('\n📋 MANUAL IMPORT INSTRUCTIONS:');
    console.log('1. Go to your GitHub repository');
    console.log('2. Click on "Code" button');
    console.log('3. Select "Download ZIP"');
    console.log('4. Extract the files locally');
    console.log('5. Copy the files you want to import');
    console.log('\n🔗 Repository URLs:');
    console.log(`   - Repository: https://github.com/${owner}/${cleanRepo}`);
    console.log(`   - ZIP Download: https://github.com/${owner}/${cleanRepo}/archive/refs/heads/${branch}.zip`);
    console.log(`   - Raw files: https://raw.githubusercontent.com/${owner}/${cleanRepo}/${branch}/`);
    
    console.log('\n💡 Alternative: Provide specific file URLs or paste file contents directly');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Get repository URL from command line arguments
const repoUrl = process.argv[2];
const branch = process.argv[3] || 'main';

if (!repoUrl) {
  console.log('📝 Usage: node import-github.js <github-repo-url> [branch]');
  console.log('📝 Example: node import-github.js https://github.com/username/repo-name main');
  console.log('\n🔗 Or provide your GitHub repository URL:');
} else {
  downloadFromGitHub(repoUrl, branch);
}