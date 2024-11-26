const Investment = require('../models/Invest');

// Delete an investment by ID
exports.deleteInvest = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedInvestment = await Investment.findByIdAndDelete(id);

    if (!deletedInvestment) {
      return res.status(404).json({ message: 'Investment not found' });
    }

    res.status(200).json({ message: 'Investment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting investment', error });
  }
};


