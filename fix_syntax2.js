const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

const target = `    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }, { status: 500 });
  }
}`;

const replacement = `    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }
}`;

content = content.replace(target, replacement);
fs.writeFileSync('src/app/api/contact/route.ts', content);
