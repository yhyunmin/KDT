exports.checkID = (req, res) => {
  // console.log(req.body);
  // console.log(req.body.data);
  const id = "banana";
  const pw = "4321";
  return (
    req.body.id === id && req.body.pw === pw
      ? res.send({ answer:`${ req.body.id }님 로그인 하였습니다.` })
      : res.send({ answer:`로그인에 실패 하였습니다.` })
  );
};
