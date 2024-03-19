const {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  serverTimestamp,
  deleteDoc,
} = require("firebase/firestore");
// importar a base de dados
const db = require("../config/firebase.js").db;

const transactionCollection = collection(db, "transactions");

// @desc: Transactions controller
// @route: GET /api/v1/transactions
// @access: Public

exports.getTransactions = async (_, res) => {
  try {
    const transactions = [];
    const querySnapshot = await getDocs(transactionCollection);
    querySnapshot.forEach((doc) => {
      transactions.push({ id: doc.id, ...doc.data() });
    });

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc: Add transaction
// @route: POST /api/v1/transactions
// @access: Public

exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = {
      text,
      amount,
      createdAt: serverTimestamp(),
    };

    await addDoc(transactionCollection, transaction);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    console.log("error:", error);
  }
};

// @desc: Delete transaction
// @route: DELETE /api/v1/transactions
// @access: Public

exports.deleteTransactions = async (req, res, next) => {
  try {
    const id = req.params.id;

    const transactionDoc = doc(transactionCollection, id);

    const docSnap = await getDoc(transactionDoc);

    if (!docSnap.exists()) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }

    await deleteDoc(transactionDoc);

    return res.status(200).json({
      success: true,
      message: "Transaction deleted successfully",
    });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
