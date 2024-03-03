const db = require('../models');
const bcrypt = require('bcrypt');
const User = db.user;

const createUser = async (params) => {
    const { userId, email, password } = params;
    const checkUser = await User.findOne({
        where: {
            userId: userId,
        },
    });

    if (checkUser) {
        throw new Error('이미 존재하는 아이디입니다.'); // 중복된 아이디를 감지하면 예외를 throw합니다.
    }
    // const hashedPassword = await bcrypt.hash(password, 10); // 라운드 수 10으로 설정

    const user = await User.create({
        userId,
        email,
        password: password,
    });
    return user ? user : null;
};

const loginUser = async (params) => {
    const { loginId, password } = params;

    if (loginId === null || loginId === '') {
        throw new Error('잘못된 요청.(loginId)');
    }

    if (password === null || password === '') {
        throw new Error('잘못된 요청.(password)');
    }

    // const hashedPassword = await bcrypt.hash(password, 10); // 라운드 수 10으로 설정

    const checkUser = await User.findOne({
        where: {
            userId: loginId,
            password: password,
        },
    });

    if (!checkUser) {
        throw new Error('아이디 또는 비밀번호를 확인하세요.');
    }

    return checkUser;
};

module.exports = {
    createUser,
    loginUser,
};
